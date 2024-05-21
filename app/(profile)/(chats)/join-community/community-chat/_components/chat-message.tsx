"use client";

import { useChatQuery } from "@/hooks/use-chat-query";
import { useChatScroll } from "@/hooks/use-chat-scroll";
import { useChatSocket } from "@/hooks/use-chat-socket";
import { Member, Message, User } from "@prisma/client"
import { Record } from "@prisma/client/runtime/library";
import { Loader2, ServerCrash } from "lucide-react";
import { ElementRef, Fragment, useRef } from "react";
import ChatWelcome from "./chat-welcome";
import ChatItem from "./chat-item";
import { format } from "date-fns";

const DATE_FORMAT = "d MM yyyy, HH:mm";

type MessageWithMemberProfile = Message & {
    member: Member & {
        user: User
    }
}

type Props = {
    member: Member;
    name: string;
    chatId: string;
    actionUrl: string;
    socketUrl: string;
    socketQuery: Record<string, string>;
    paramKey: "communityId" | "conversationId";
    paramValue: string;
    type: "community" | "conversation";
}
export const ChatMessages = ({
    member,
    name,
    chatId,
    actionUrl,
    socketUrl,
    socketQuery,
    paramKey,
    paramValue,
    type
}: Props) => {
    const queryKey = `chat:${chatId}`;
    const addKey = `chat:${chatId}:messages`;
    const updateKey = `chat:${chatId}:messages:update`;

    const chatRef = useRef<ElementRef<"div">>(null);
    const bottomRef = useRef<ElementRef<"div">>(null);

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status
    } = useChatQuery({
        queryKey,
        actionUrl,
        paramKey,
        paramValue
    });

    useChatSocket({
        queryKey,
        addKey,
        updateKey
    });

    useChatScroll({
        chatRef,
        bottomRef,
        loadMore: fetchNextPage,
        shouldLoadMore: !isFetchingNextPage && !!hasNextPage,
        count: data?.pages?.[0]?.items?.length ?? 0,
    });

    // if (status === "pending" || status === "error" || !data) {
    //     return (
    //         <>
    //             {status === "error" ? (
    //                 <div className="flex flex-col flex-1 justify-center items-center">
    //                     <ServerCrash className="h-7 w-7 text-zinc-500 my-4" />
    //                     <p className="text-xs text-zinc-500 dark:text-zinc-400">
    //                         Error loading messages
    //                     </p>
    //                 </div>
    //             ) :
    //                 <div className="flex flex-col flex-1 justify-center items-center">
    //                     <Loader2 className="h-7 w-7 text-zinc-500 animate-spin my-4" />
    //                     <p className="text-xs text-zinc-500 dark:text-zinc-400">
    //                         loading messages...
    //                     </p>
    //                 </div>
    //             }
    //         </>
    //     )
    // }


    return (
        <div ref={chatRef} className="flex-1 flex flex-col py-4 overflow-y-auto">
            {!hasNextPage && <div className="flex-1" />}

            {!hasNextPage && (
                <ChatWelcome
                    type={type}
                    name={name}
                />)}

            {hasNextPage && (
                <div className="flex justify-center">
                    {isFetchingNextPage ? (
                        <Loader2 className="h-6 w-6 text-zinc-500 animate-spin my-4" />
                    ) : (
                        <button
                            onClick={() => fetchNextPage()}
                            className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 text-sm my-4
                            dark:hover:text-zinc-300 transition"

                        >
                            Load previous messages
                        </button>
                    )}
                </div>
            )}

            <div className="flex flex-col-reverse mt-auto">
                {data?.pages?.map((group, i) => (
                    <Fragment key={i}>
                        {group.items.map((message: MessageWithMemberProfile) => (
                            <ChatItem
                                key={message.id}
                                id={message.id}
                                content={message.content}
                                currentMember={member}
                                member={message.member as any}
                                deleted={message.deleted}
                                timestamp={format(new Date(message.createdAt), DATE_FORMAT)}
                                isUpdated={message.updatedAt !== message.createdAt}
                                socketUrl={socketUrl}
                                socketQuery={socketQuery}
                            />
                        ))}
                    </Fragment>
                ))}
            </div>

            <div ref={bottomRef} />
        </div>
    )
}

