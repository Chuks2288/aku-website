// "use client";

// import * as z from "zod";
// import { useState, useEffect, useTransition } from "react";
// import { toast } from "sonner";

// import {
//     Avatar,
//     AvatarImage,
// } from "@/components/ui/avatar"
// import { FileUpload } from "@/components/file-upload";
// import { UpdateUserSchema } from "@/schema";
// import { updateUserSettings } from "@/actions/update-user-settings";
// import { Edit } from "lucide-react";

// type Props = {
//     image: string | null;
//     firstName: string | null;
//     lastName: string | null;
// }

// export const ImageForm = ({
//     image: initialImage,
//     firstName,
//     lastName,
// }: Props) => {
//     const [isEditing, setIsEditing] = useState(false);
//     const [uploadedImage, setUploadedImage] = useState<string | null>(initialImage);
//     const [isPending, startTransition] = useTransition();

//     // useEffect(() => {
//     //     if (uploadedImage) {
//     //         localStorage.setItem("uploadedImage", uploadedImage);
//     //     }
//     // }, [uploadedImage]);

//     // useEffect(() => {
//     //     const storedImage = localStorage.getItem("uploadedImage");
//     //     if (storedImage) {
//     //         setUploadedImage(storedImage);
//     //     }
//     // }, []);

//     const onSubmit = async (values: z.infer<typeof UpdateUserSchema>) => {
//         startTransition(() => {
//             updateUserSettings(values)
//                 .then((data) => {
//                     if (data?.error) {
//                         toast.error(data.error)
//                     }
//                     if (data?.success) {
//                         toast.success(data.success)
//                     }
//                 })
//                 .catch(() => toast.error("Something went wrong"));
//         });
//     };

//     return (
//         <div className="mb-4 space-y-4">
//             <div className="flex justify-center items-center relative">
//                 <Avatar
//                     className="w-[90px] h-[90px] rounded-full object-cover"
//                 >
//                     <AvatarImage
//                         src={uploadedImage || initialImage || "/placeholder.png"}
//                         alt="Profile Photo"
//                     />
//                 </Avatar>
//                 {(!uploadedImage && !initialImage) && (
//                     <div className="absolute flex inset-0 items-center justify-center">
//                         <div
//                             className="absolute top-5 right-14 cursor-pointer"
//                             onClick={() => setIsEditing(true)}
//                         >
//                             {isEditing ? "" :
//                                 <div className="w-7 h-7 flex justify-center items-center rounded-full bg-gray-100">
//                                     <Edit className="w-3 h-3 text-green-800 stroke-[3]" />
//                                 </div>
//                             }
//                         </div>
//                     </div>
//                 )}
//                 {(uploadedImage && !initialImage) && (
//                     <div className="absolute flex inset-0 items-center justify-center">
//                         <div
//                             className="absolute -top-1 right-14 cursor-pointer"
//                             onClick={() => setIsEditing(true)}
//                         >
//                             {isEditing ? "" :
//                                 <div className="w-7 h-7 flex justify-center items-center rounded-full bg-gray-100">
//                                     <Edit className="w-3 h-3 text-green-800 stroke-[3]" />
//                                 </div>
//                             }
//                         </div>
//                     </div>
//                 )}
//                 {isEditing && (
//                     <div className="absolute inset-0 flex items-center justify-center">
//                         <FileUpload
//                             endpoint="profileImage"
//                             onChange={(url) => {
//                                 if (url) {
//                                     setUploadedImage(url);
//                                     setIsEditing(false);
//                                     onSubmit({ image: url });
//                                 }
//                             }}
//                         />
//                     </div>
//                 )}
//             </div >

//             <h4 className="text-lg font-bold">
//                 {lastName + " " + firstName}
//             </h4>
//         </div >
//     );
// };




"use client";

import * as z from "zod";
import { useState, useEffect, useTransition } from "react";
import { toast } from "sonner";

import {
    Avatar,
    AvatarImage,
} from "@/components/ui/avatar"
import { FileUpload } from "@/components/file-upload";
import { UpdateUserSchema } from "@/schema";
import { updateUserSettings } from "@/actions/update-user-settings";
import { Edit } from "lucide-react";
import ActionTooltip from "@/components/action-tooltip";

type Props = {
    image: string | null;
    firstName: string | null;
    lastName: string | null;
}

export const ImageForm = ({
    image: initialImage,
    firstName,
    lastName,
}: Props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [uploadedImage, setUploadedImage] = useState<string | null>(initialImage);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        if (uploadedImage) {
            localStorage.setItem("uploadedImage", uploadedImage);
        }
    }, [uploadedImage]);

    useEffect(() => {
        const storedImage = localStorage.getItem("uploadedImage");
        if (storedImage) {
            setUploadedImage(storedImage);
        }
    }, []);

    return (
        <div className="mb-4 space-y-4">
            <div className="flex justify-center items-center relative">
                <Avatar
                    className="w-[90px] h-[90px] rounded-full object-cover"
                >
                    <AvatarImage
                        src={uploadedImage || initialImage || "/placeholder.png"}
                        alt="Profile Photo"
                    />
                </Avatar>
            </div>
            <h4 className="text-lg font-bold">
                {lastName + " " + firstName}
            </h4>
        </div>
    );
};
