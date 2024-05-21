import { db } from "@/lib/db"
import { FormAccess } from "./_components/form-access";
import { currentUser } from "@/lib/auth"
import { ChatMessages } from "./_components/chat-message";
import ChatInput from "./_components/chat-input";
import { ChatHeader } from "./_components/chat-header";
import { redirect } from "next/navigation";
import { Member } from "@prisma/client";

const CommunityChatPage = async () => {
    const user = await currentUser();

    if (!user) {
        return redirect("");
    }

    const community = await db.community.findFirst();

    if (!community?.communityMember) {
        return (
            <div>
                <FormAccess />
            </div>
        )
    }

    const member = await db.member.findFirst({
        where: {
            communityId: community.id,
            userId: user.id,
        },
        include: {
            user: true
        }
    });

    if (!member) {
        return <div>Error: Member not found</div>;
    }

    return (
        <div className="h-full max-w-[1200px] mx-auto px-3">
            <ChatHeader
                name={community.name}
            />

            <ChatMessages
                member={member as Member}
                name={community.name}
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
                name={community?.name as string}
                query={{
                    communityId: community.id,
                }}
            />
        </div>
    )
}

export default CommunityChatPage;
