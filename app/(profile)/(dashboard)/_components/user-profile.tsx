import { ImageForm } from "./image-form";
import { UserBalance } from "./user-balance";

type Props = {
    image: string | null;
    firstName: string | null;
    lastName: string | null;
    balance: any;
}


export const UserProfile = ({
    image,
    firstName,
    lastName,
    balance,
}: Props) => {
    return (
        <div>
            <ImageForm
                image={image}
                firstName={firstName}
                lastName={lastName}
            />
            <UserBalance
                balance={balance}
            />
        </div>
    )
}

