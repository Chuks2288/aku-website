import { LogoutMoal } from "@/components/modal/logout-modal"
import { UserItems } from "./user-items"
import { UserLogout } from "./user-logout"
import { UserProfile } from "./user-profile"
import { User } from "@prisma/client"

type Props = {
    user: User
}

export const ProfileSidebar = ({
    user
}: Props) => {

    return (
        <div className="fixed left-0 top-0 md:w-72 w-0 h-full shadow-lg p-10 md:flex hidden 
        flex-col justify-between">
            <div className="space-y-10">
                <UserProfile
                    image={user?.imageUrl}
                    firstName={user?.firstName}
                    lastName={user?.lastName}
                    balance={user?.balance}
                />
                <UserItems />
            </div>
            <div className="mt-auto">
                <UserLogout />
            </div>
        </div>
    )
}

