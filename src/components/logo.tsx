import Link from "next/link";
import Image from "next/image";


export const Logo = () => {
    return (
        <Link href="/">
            <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
                <Image
                    src="/images/logo.svg"
                    alt="Logo"
                    height={70}
                    width={70}
                />
            </div>
        </Link>
    );
};
