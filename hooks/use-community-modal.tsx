import { create } from "zustand";

type CommunityMoal = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useCommunityMoal = create<CommunityMoal>((set) => ({
    isOpen: false,
    // isOpen: true,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));