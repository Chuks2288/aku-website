import { db } from "./db";

export const getUserByEmail = async (email: string) => {
    try {
        const user = await db.user.findUnique({
            where: { email }
        })

        return user;
    } catch (error) {
        return null;
    }
}
export const getCurrentUserByEmail = async (email: string) => {
    try {
        const user = await db.user.findFirst({
            where: { email }
        })

        return user;
    } catch (error) {
        return null;
    }
}

export const getUserByUsername = async (userName: string) => {
    try {
        const user = await db.user.findUnique({
            where: { userName }
        })

        return user;
    } catch (error) {
        return null;
    }
}

export const getUserById = async (id: string | undefined) => {
    try {
        const user = await db.user.findUnique({ where: { id } });

        return user;
    } catch {
        return null;
    }
};



// export const getUsersByReferrerLink = async (referrerLink: string) => {
//     try {
//         // Find the referrer with the specified referrerLink
//         const referrer = await db.referral.findUnique({
//             where: { referrerLink }
//         });

//         if (!referrer) {
//             console.error("Referrer not found for the provided referrerLink:", referrerLink);
//             return [];
//         }

//         // Find all users associated with the referrer
//         const users = await db.user.findMany({
//             where: { referrerId: referrer.id }
//         });

//         return users;
//     } catch (error) {
//         console.error("Error fetching users by referrer link:", error);
//         return [];
//     }
// };
