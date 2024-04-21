import { create } from "zustand";

type LogoutMoal = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useLogoutMoal = create<LogoutMoal>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));