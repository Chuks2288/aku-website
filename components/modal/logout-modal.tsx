"use client";

import { ArrowRight, Loader, Loader2 } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { LogoutButton } from "@/components/logout-button";
import { useLogoutMoal } from "@/hooks/use-logout-modal";
import { Button } from "@/components/ui/button";
import { logout } from "@/actions/logout";
import { useState } from "react";

export const LogoutMoal = () => {
    const { isOpen, onClose } = useLogoutMoal();

    const [loading, setLoading] = useState(false);

    const handleLogout = () => {
        setLoading(true);
        logout().then(() => {
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    };

    return (
        <Dialog
            open={isOpen}
            onOpenChange={onClose}
        >

            <DialogContent className="max-w-[300px] px-4 flex flex-col gap-y-4 items-center justify-center">
                <DialogTitle className="text-red-500">
                    Confirm Logout
                </DialogTitle>
                <DialogDescription className="text-center">
                    You are about to log out of your account.
                    Are you sure you want to proceed?
                </DialogDescription>
                <DialogFooter className="w-full flex justify-center items-center gap-2">
                    <Button
                        onClick={onClose}
                        variant="default"
                        size="sm"
                        className="w-full"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleLogout}
                        variant="destructive"
                        size="sm"
                        className="w-full"
                    >
                        {loading ?
                            <Loader className="w-5 h-5 animate-spin" />
                            : "Continue"
                        }
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}

