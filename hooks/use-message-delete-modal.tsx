import { Community } from "@prisma/client";
import { create } from "zustand";

interface ModalData {
    community?: Community;
    actionUrl?: string;
    query?: Record<string, any>;
}

type DeleteMessageModal = {
    isOpen: boolean;
    data: ModalData; // Define data property in the type
    onOpen: (data?: ModalData) => void;
    onClose: () => void;
}

export const useDeleteMessageModal = create<DeleteMessageModal>((set) => ({
    isOpen: false,
    data: {}, // Initialize data property with an empty object
    onOpen: (data = {}) => set({ isOpen: true, data }),
    onClose: () => set({ isOpen: false, data: {} }) // Reset data when closing the modal
}));
