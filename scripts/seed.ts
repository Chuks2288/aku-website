import "dotenv/config";
// import { neon } from "@neondatabase/serverless";
import { db } from "@/lib/db";
import { v4 as uuidv4 } from "uuid";

// import * as prisma from "@/prisma";

// const sql = neon(process.env.DATABASE_URL!);

const main = async () => {
    try {
        console.log("Seeding database");

        await db.newsFeed.deleteMany();

        await db.newsFeed.createMany({
            data: [
                {
                    id: uuidv4(),
                    title: "What you don’t know about Flamingos?",
                    description: "Flamingos are very social birds; they live in colonies whose population can number in the thousands",
                },

            ]
        })
    } catch (error) {

    }
}