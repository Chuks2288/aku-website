import { User } from "@prisma/client"
import { ImageEditForm } from "./image-edit-form"
import { UserEditForm } from "./user-edit-form"


type Props = {
    user: User
}

export const UserProfileEdit = ({
    user
}: Props) => {
    return (
        <div className="w-full">
            <div className="flex justify-center">
                <ImageEditForm
                    image={user?.image}
                    firstName={user?.firstName}
                    lastName={user?.lastName}
                />
            </div>
        </div>
    )
}

