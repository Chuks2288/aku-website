
import { useTitle } from "@/hooks/use-title"

export const CommunityNavbarTitle = () => {


    const { title } = useTitle();

    return (
        <h4 className="font-bold text-blue-800 stroke-[3] text-xl">
            {title}
        </h4>
    )
}

