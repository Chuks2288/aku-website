"use client";

import { useEffect, useState } from "react";

import {
    Avatar,
    AvatarImage
} from "@/components/ui/avatar"

type Props = {
    imageUrl: string | any;
}

export const CommunityUserProfile = ({
    imageUrl
}: Props) => {
    const [uploadedImage, setUploadedImage] = useState<string | null>(imageUrl);

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
        <Avatar
            className="w-[50px] h-[50px] rounded-full object-cover"
        >
            <AvatarImage
                src={uploadedImage || imageUrl || "/placeholder.png"}
                alt="Profile Photo"
            />
        </Avatar>
    )
}

