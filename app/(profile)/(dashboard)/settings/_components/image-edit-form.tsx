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
import { User } from "@prisma/client";

type Props = {
    user: User;
}

export const ImageEditForm = ({
    user
}: Props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isPending, startTransition] = useTransition();
    const [uploadedImage, setUploadedImage] = useState<string | null>(user?.imageUrl);

    const onSubmit = async (imageUrl: string | any) => {
        startTransition(() => {
            updateUserSettings(imageUrl)
                .then((data) => {
                    if (data?.error) {
                        toast.error(data.error)
                    }
                    if (data?.success) {
                        toast.success(data.success)
                    }
                })
                .catch(() => toast.error("Something went wrong"));
        });
    };

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
                        src={uploadedImage || user?.imageUrl || "/placeholder.png"}
                        alt="Profile Photo"
                    />
                </Avatar>
                <div className="absolute inset-0 flex items-center justify-center">
                    {isEditing && (
                        <FileUpload
                            endpoint="profileImage"
                            onChange={(url) => {
                                if (url) {
                                    setIsEditing(false);
                                    setUploadedImage(url); // Update uploadedImage state
                                    onSubmit({ imageUrl: url });
                                }
                            }}
                        />
                    )}
                    {isEditing && (
                        <ActionTooltip
                            label="upload photo"
                            side="right"
                        >
                            <div
                                className="absolute top-0 right-14 cursor-pointer bg-gray-100 w-7 h-7 rounded-full flex justify-center items-center"
                                onClick={() => setIsEditing(true)}
                            >
                                <Edit className="w-4 h-4 text-green-800 stroke-[3]" />
                            </div>
                        </ActionTooltip>
                    )}
                    {!isEditing && (
                        <ActionTooltip
                            label="change photo"
                            side="right"
                        >
                            <div
                                className="absolute -top-2 right-10 cursor-pointer bg-gray-100 w-7 h-7 rounded-full flex justify-center items-center"
                                onClick={() => setIsEditing(true)}
                            >
                                <Edit className="w-4 h-4 text-green-800 stroke-[3]" />
                            </div>
                        </ActionTooltip>
                    )}
                </div>
            </div>
            <h4 className="text-lg font-bold">
                {user?.lastName + " " + user?.firstName}
            </h4>
        </div>
    );
};
