
import { db } from "@/lib/db"
import { FormAccess } from "./_components/form-access"
import { currentUser } from "@/lib/auth"
import { ChatMessages } from "./_components/chat-message";
import ChatInput from "./_components/chat-input";
import { ChatHeader } from "./_components/chat-header";
import { redirect } from "next/navigation";
import { Member } from "@prisma/client";


const CommunityChatPage = async () => {

    const user = await currentUser();

    const community = await db.community.findUnique({
        where: {
            userId: user?.id
        }
    });

    if (!community?.communityMember) {
        return (
            <div>
                <FormAccess />
            </div>
        )
    }

    const member = await db.member.findFirst({
        where: {
            userId: user?.id,
        },
        include: {
            user: true
        }
    });


    return (
        <div>
            <ChatHeader
                name={community?.name}
            />

            <ChatMessages
                member={member as Member}
                name={community?.name}
                chatId={community.id}
                actionUrl="/api/messages"
                socketUrl="/api/socket/messages"
                socketQuery={{
                    communityId: community.id,
                }}
                paramKey="communityId"
                paramValue={community.id}
                type="community"
            />
            <ChatInput
                actionUrl="/api/socket/messages"
                type="community"
                name={member?.user.firstName as string}
                query={{
                    communityId: community.id,
                }}
            />
        </div>
    )
}

export default CommunityChatPage