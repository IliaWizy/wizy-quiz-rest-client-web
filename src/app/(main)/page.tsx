import {Button} from "@/components/ui/button";
import Link from "next/link";
import localFont from "next/font/local";
import {cn} from "@/lib/utils";
import {Poppins} from "next/font/google";

const headingFont = localFont({
    src: "../../../public/font/font.woff2"

})

const textFont = Poppins({
    subsets: ["latin"],
    weight: [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900"
    ],
});

function Home() {
    return (
        <div className={"flex items-center flex-col justify-center"}>
            <div className={cn(
                "flex items-center flex-col justify-center",
                headingFont.className)}>

                <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
                </h1>

                <div
                    className={"text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit"}>
                    wyzi quiz
                </div>
            </div>
            <div className={cn(
                "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
                textFont.className,
            )}>
                Превращаем рутину в радость: исследуйте, учите и добивайтесь большего.
            </div>
            <Button asChild size={"lg"} className={"mt-6"}>
                <Link href={"/sing-up"}>
                    Начни бесплатно
                </Link>
            </Button>
        </div>
    );
}

export default Home;
