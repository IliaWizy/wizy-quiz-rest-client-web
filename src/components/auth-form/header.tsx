import {cn} from "@/lib/utils";
import {Poppins} from "next/font/google";
import Link from "next/link";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]

})

interface HeaderProps {
    title: string
    label: string
}

const Header = ({label, title}: HeaderProps) => {

    return (
        <div className={"flex flex-col h-full gap-y-4 items-center justify-center"}>
            <h1 className={cn("text-3xl font-semibold", font.className)}>
                <Link href={"/"}>
                    {title}
                </Link>
            </h1>
            <p className={cn("text-muted-foreground text-sm", font.className)}>
                {label}
            </p>
        </div>
    )
}

export default Header
