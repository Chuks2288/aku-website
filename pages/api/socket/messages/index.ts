import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextApiResponseServerIo } from "@/types";
import { NextApiRequest } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponseServerIo,
) {


    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const user = await currentUser();
        const { content } = req.body;
        const { communityId } = req.query;

        if (!user) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        if (!communityId) {
            return res.status(400).json({ error: "community Id missing" });
        }

        if (!content) {
            return res.status(400).json({ error: "Content ID missing" });
        }

        const community = await db.community.findFirst({
            where: {
                id: communityId as string,
                members: {
                    some: {
                        userId: user?.id,
                    }
                }
            },
            include: {
                members: true,
            }
        });

        if (!community) {
            return res.status(404).json({ message: "Server not found" });
        }

        const member = community.members.find((member) => member.userId === user.id);

        if (!member) {
            return res.status(404).json({ message: "Member not found" });
        }


        const message = await db.message.create({
            data: {
                content,
                communityId: communityId as string,
                memberId: member.id,
            },
            include: {
                member: {
                    include: {
                        user: true,
                    }
                }
            }
        });

        const communityKey = `chat:${communityId}:messages`;

        res?.socket?.server?.io?.emit(communityKey, message);

        return res.status(200).json(message);
    } catch (error) {
        console.log("[MESSAGE_POST]", error);
        return res.status(500).json({ message: "Internal Error" });
    }
}
