
import { currentUser } from "@/lib/auth";
import { UserProfileEdit } from "./_components/user-profile-edit";
import { logout } from "@/actions/logout";
import { User } from "@prisma/client";
import { UserEditForm } from "./_components/user-edit-form";
import { redirect } from "next/navigation";

const SettingsPage = async () => {

    const user = await currentUser();

    if (!user) {
        redirect("/")
    }

    return (
        <div className="w-full h-full flex flex-col gap-y-6">
            <UserProfileEdit
                user={user as User}
            />
            <UserEditForm
                user={user as User}
            />
        </div>
    )
}

export default SettingsPage