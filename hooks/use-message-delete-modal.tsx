
import { Community } from "@prisma/client";
import { create } from "zustand";

interface ModalData {
    community?: Community;
    actionUrl?: string;
    query?: Record<string, any>;
}
type DeleteMessageMoal = {
    isOpen: boolean;
    onOpen: (data?: ModalData) => void;
    onClose: () => void;
}

export const useDeleteMessageMoal = create<DeleteMessageMoal>((set) => ({
    isOpen: false,
    data: {},
    onOpen: (data = {}) => set({ isOpen: true, ...data }),
    onClose: () => set({ isOpen: false })
}));
