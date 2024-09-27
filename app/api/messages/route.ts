import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { Message } from "@prisma/client";
import { currentUser } from "@/lib/auth";

const MESSAGE_BATCH = 10;

export async function GET(req: Request) {
    try {
        const user = await currentUser();
        const { searchParams } = new URL(req.url);
        const cursor = searchParams.get("cursor");
        const communityId = searchParams.get("communityId");

        if (!user) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!communityId) {
            return new NextResponse("Community ID missing", { status: 400 });
        }

        let messages: Message[] = [];

        const baseQuery = {
            take: MESSAGE_BATCH,
            where: {
                communityId,
            },
            include: {
                member: {
                    include: {
                        user: true,
                    }
                }
            },
            orderBy: {
                createdAt: 'desc' as const  // Fix: explicitly cast 'desc' as SortOrder
            }
        };

        if (cursor) {
            messages = await db.message.findMany({
                ...baseQuery,
                skip: 1,
                cursor: {
                    id: cursor,
                },
            });
        } else {
            messages = await db.message.findMany(baseQuery);
        }

        let nextCursor = null;
        if (messages.length === MESSAGE_BATCH) {
            nextCursor = messages[MESSAGE_BATCH - 1].id;
        }

        return NextResponse.json({
            items: messages,
            nextCursor
        });

    } catch (error) {
        console.error("MESSAGE_GET Error:", { error, url: req.url });
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
