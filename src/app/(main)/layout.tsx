import React from "react";
import {Navbar} from "@/app/(main)/_component/navbar";
import {Footer} from "@/app/(main)/_component/footer";

const MainLayout = ({children}: { children: React.ReactNode }) => {

    return (
        <div className={"h-full bg-slate-100"}>
            <Navbar/>
            <main className={"pt-40 pb-20 bg-slate-100 justify-center flex"}>
                {children}
            </main>
            <Footer/>
        </div>
    );
}

export default MainLayout;
