"use client";

import { Icon } from "@iconify/react";


type Props = {
    inviteUrl: string | null;
}

const shareIcons = [
    {
        icon: "basil:twitter-outline",
        share: "twitter",
    },
    {
        icon: "openmoji:instagram",
        share: "instagram",
    },
    {
        icon: "ri:facebook-line",
        share: "facebook",
    },
    {
        icon: "prime:whatsapp",
        share: "whatsapp",
    },
]

export const ShareModal = ({
    inviteUrl
}: Props) => {

    const shareOnSocialMedia = (platform: any) => {
        let shareUrl = "";

        switch (platform) {
            case "facebook":
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${inviteUrl}`;
                break;
            case "twitter":
                shareUrl = `https://twitter.com/intent/tweet?url=${inviteUrl}`;
                break;
            case "whatsapp":
                shareUrl = `https://wa.me/?text=${inviteUrl}`;
                break;
            case "instagram":
                alert("Instagram sharing is not supported directly. Please copy the link and share it manually.");
                return;
            default:
                return;
        }

        window.open(shareUrl, "_blank");
    };


    return (
        <div className="absolute -bottom-8 right-16 z-50 rounded-md flex items-center transition justify-between gap-x-2 bg-white shadow-md shadow-black px-2 py-1">
            {shareIcons.map(({ icon, share }) => (
                <button
                    type="button"
                    className=""
                    key={share}
                    onClick={() => shareOnSocialMedia(share)}
                >
                    <Icon icon={icon} fontSize={18} className="text-green-500 stroke-[2]" />
                </button>
            ))}
        </div>
    )
}

