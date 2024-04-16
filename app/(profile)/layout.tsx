
interface Props {
    children: React.ReactNode
}

const ProfileLayout = ({
    children
}: Props) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default ProfileLayout