import { LogoutMoal } from "@/components/modal/logout-modal"
import { CommunityModal } from "../modal/community-modal"

export const ModalProvider = () => {
    return (
        <>
            <LogoutMoal />
            <CommunityModal />
        </>
    )
}

