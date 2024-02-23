"use client"

import React from "react";
import {useRouter} from "next/navigation";

interface LoginButtonProps {
    children: React.ReactNode
    mode?: "modal" | "redirect"
    asChild?: boolean
}

const LoginButton = ({
    children,
    mode = "redirect",
    asChild
}: LoginButtonProps) => {

    const router = useRouter();
    const onClick = () => {
        router.push("/account/login")
    }

    if (mode == "modal") {
        return (
            <span>Implement modal</span>
        )
    }

    return (
        <span className={"cursor-pointer"} onClick={onClick}>
            {children}
        </span>
    );
};

export default LoginButton;
