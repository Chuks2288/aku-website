import { Button } from "@/components/ui/button"
import { infoItems } from "@/constant"
import Link from "next/link"


export const FooterInfo = () => {
    return (
        <div className="text-white space-y-4">
            <h3 className="font-bold text-lg">
                Info
            </h3>
            <div className="flex flex-col gap-y-3">
                {infoItems.map((info) => (
                    <Link
                        href={info.path}
                        key={info.label}
                        className="text-sm font-normal tracking-wide hover:text-white/85"
                    >
                        {info.label}
                    </Link>
                ))}
            </div>

        </div>
    )
}

