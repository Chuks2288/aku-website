"use client";

import { useEffect } from "react";

import { User } from "@prisma/client"
import { useTitle } from "@/hooks/use-title";

import { Logo } from "@/app/(main)/_components/logo"
import { CommunityNavbarTitle } from "./community-navbar-title"
import { CommunityUserProfile } from "./community-user-profile"
import { Button } from "@/components/ui/button";

type Props = {
    user: User
}

export const CommunityNavbar = ({
    user
}: Props) => {

    const { setTitle } = useTitle();

    useEffect(() => {
        setTitle("Community")
    }, [])

    return (
        <div className="h-20 border-b-2">
            <div className="max-w-[1200px] mx-auto px-3 h-full flex items-center justify-between">
                <Logo
                    width={80}
                    height={45}
                />
                <CommunityNavbarTitle />
                <div className="gap-x-8 flex items-center">
                    <CommunityUserProfile
                        // @ts-ignore
                        image={user?.imageUrl}
                    />
                    <Button
                        variant="primary"
                        size="sm"
                        className="md:flex hidden"
                    >
                        Get Started
                    </Button>
                </div>

            </div>
        </div>
    )
}

