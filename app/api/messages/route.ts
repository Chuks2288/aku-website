// import currentUser from "@/lib/current-user";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { Message } from "@prisma/client";
import { currentUser } from "@/lib/auth";

const MESSAGE_BATCH = 10;

export async function GET(
    req: Request
) {
    try {
        const user = await currentUser();
        const { searchParams } = new URL(req.url);

        const cursor = searchParams.get("cursor");
        const communityId = searchParams.get("communityId");


        if (!user) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!communityId) {
            return new NextResponse("community ID missing", { status: 400 });
        }

        let messages: Message[] = [];

        if (cursor) {
            messages = await db.message.findMany({
                take: MESSAGE_BATCH,
                skip: 1,
                cursor: {
                    id: cursor,
                },
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
                    createdAt: "desc"
                }
            })
        } else {
            messages = await db.message.findMany({
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
                    createdAt: "desc"
                }
            })
        }

        let nextCursor = null;

        if (messages.length === MESSAGE_BATCH) {
            nextCursor = messages[MESSAGE_BATCH - 1].id;
        }


        return NextResponse.json({
            items: messages,
            nextCursor
        })

    } catch (error) {
        console.log("MESSAGE_GET", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}