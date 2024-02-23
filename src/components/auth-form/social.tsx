"use client"

import {Button} from "@/components/ui/button";
import {FcGoogle} from "react-icons/fc";
import {SlSocialVkontakte} from "react-icons/sl";
import {FaGithub} from "react-icons/fa";

const Social = () => {
    return (
        <div className={"flex items-center w-full gap-x-2"}>
            <Button
                variant={"outline"}
                size={"lg"}
                className={"w-full"}
                onClick={() => {
                }}
            >
                <FcGoogle className={"h-5 w-5"}/>
            </Button>

            <Button
                variant={"outline"}
                size={"lg"}
                className={"w-full"}
                onClick={() => {
                }}
            >
                <SlSocialVkontakte className={"h-5 w-5"}/>
            </Button>

            <Button
                variant={"outline"}
                size={"lg"}
                className={"w-full"}
                onClick={() => {
                }}
            >
                <FaGithub className={"h-5 w-5"}/>
            </Button>

        </div>
    )
}

export default Social
