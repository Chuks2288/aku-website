// import currentUserPages from "@/lib/current-user-pages";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextApiResponseServerIo } from "@/types";
import { MemberRole } from "@prisma/client";
import { NextApiRequest } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponseServerIo,
) {
    if (req.method !== "DELETE" && req.method !== "PATCH") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const user = await currentUser();
        const { communityId, messageId } = req.query;
        const { content } = req.body;

        if (!user) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        if (!communityId) {
            return res.status(401).json({ error: "community ID missing" });
        }

        const community = await db.community.findFirst({
            where: {
                id: communityId as string,
                members: {
                    some: {
                        userId: user.id,
                    }
                }
            },
            include: {
                members: true,
            }
        })

        if (!community) {
            return res.status(404).json({ error: "Server not found" });
        }


        const member = community.members.find((member) => member.userId === user.id);

        if (!member) {
            return res.status(404).json({ error: "Member not found" });
        }


        let message = await db.message.findFirst({
            where: {
                id: messageId as string,
                communityId: communityId as string,
            },
            include: {
                member: {
                    include: {
                        user: true,
                    }
                }
            }
        });

        if (!message || message.deleted) {
            return res.status(401).json({ error: "Message not found" });
        }

        const isMessageOwner = message.memberId === member.id;
        const isAdmin = member.role === MemberRole.ADMIN;
        const isModerator = member.role === MemberRole.MODERATOR;
        const canModify = isMessageOwner || isAdmin || isModerator;

        if (!canModify) {
            return res.status(401).json({ error: "Unauthorized" });
        }


        if (req.method === "DELETE") {
            message = await db.message.update({
                where: {
                    // communityId: communityId as string,
                    id: messageId as string,
                },
                data: {
                    content: "This message has been deleted.",
                    deleted: true,
                },
                include: {
                    member: {
                        include: {
                            user: true,
                        }
                    }
                }
            })
        }

        if (req.method === "PATCH") {
            if (!isMessageOwner) {
                return res.status(401).json({ error: "Unauthorized" });
            }

            message = await db.message.update({
                where: {
                    // communityId: communityId as string,
                    id: messageId as string,
                },
                data: {
                    content,
                },
                include: {
                    member: {
                        include: {
                            user: true,
                        }
                    }
                }
            })
        }

        const updateKey = `chat:${communityId}:messages:update`;

        res?.socket?.server?.io?.emit(updateKey, message);

        return res.status(200).json(message);
    } catch (error) {
        console.log("[MESSAGE_ID]", error);
        return res.status(500).json({ error: "Method not allowed" });
    }
}