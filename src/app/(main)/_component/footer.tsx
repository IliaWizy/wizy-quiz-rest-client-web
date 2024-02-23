import {Button} from "@/components/ui/button";
import localFont from "next/font/local";
import {cn} from "@/lib/utils";

const headingFont = localFont({
    src: "../../../../public/font/font.woff2",
});

export const Footer = () => {
    return (
        <div className="fixed bottom-0 w-full p-4 border-t bg-slate-100">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <p className={cn(
                    "text-md text-neutral-700 pb-1",
                    headingFont.className,
                )}>
                    Wizy
                </p>
                <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
                    <Button size="sm" variant="ghost">
                        Политика конфиденциальности
                    </Button>
                    <Button size="sm" variant="ghost">
                        Условия использования
                    </Button>
                </div>
            </div>
        </div>
    );
};
