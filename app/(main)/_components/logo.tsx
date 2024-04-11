import Image from "next/image";
import Link from "next/link";

type Props = {
    width: number;
    height: number;
}

export const Logo = ({
    width,
    height,
}: Props) => {
    return (
        <Link href="/">
            <Image
                src="/logo.svg"
                alt="Logo"
                width={width}
                height={height}
            />
        </Link>
    )
}

