// import { NextApiRequest } from "next";
// import { db } from "./db";
// import { currentUser } from "./auth";

// const currentProfilePages = async (req: NextApiRequest) => {
//     try {
//         // Assuming currentUser function doesn't need any arguments
//         const user = await currentUser();

//         if (!user) {
//             console.error("User not found");
//             return null;
//         }

//         const profile = await db.user.findUnique({
//             where: {
//                 userId: user.id
//             }
//         });

//         if (!profile) {
//             console.error("User profile not found");
//             return null;
//         }

//         return profile;
//     } catch (error) {
//         console.error("Error fetching user profile:", error);
//         return null;
//     }
// }

// export default currentProfilePages;
