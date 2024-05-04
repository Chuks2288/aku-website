import { Server as NetServer, Socket } from "net";
import { NextApiResponse } from "next";
import { Server as SocketIoServer } from "socket.io";
// import { Server, Member, Profile } from "@prisma/client";

// export type ServerWithMembersWithProfiles = Server & {
//     members: (Member & { profile: Profile })[]
// };

export type NextApiResponseServerIo = NextApiResponse & {
    socket: Socket & {
        server: NetServer & {
            io: SocketIoServer;
        }
    }
}

export interface EmojiMartData {
    categories: Category[]
    emojis: { [key: string]: Emoji }
    aliases: { [key: string]: string }
    sheet: Sheet
}

export interface Category {
    id: string
    emojis: string[]
}

export interface Emoji {
    id: string
    name: string
    keywords: string[]
    skins: Skin[]
    version: number
    emoticons?: string[]
}

export interface Skin {
    unified: string
    native: string
    x?: number
    y?: number
}

export interface Sheet {
    cols: number
    rows: number
}
