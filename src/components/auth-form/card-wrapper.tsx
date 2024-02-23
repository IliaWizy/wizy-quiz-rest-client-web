"use client"

import {ReactNode} from "react";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import Header from "@/components/auth-form/header";
import Social from "@/components/auth-form/social";
import BackButton from "@/components/auth-form/back-button";

interface CardWrapperProps {
    children: ReactNode
    cardTitle: string
    cardSubTitle: string
    backButtonLabel: string
    backButtonHref: string
    showSocial?: boolean
}

const CardWrapper = ({
    children,
    cardTitle,
    cardSubTitle,
    backButtonLabel,
    backButtonHref,
    showSocial
}: CardWrapperProps) => {
    return (
        <Card className={"w-[400px] shadow-md"}>
            <CardHeader>
                <Header title={cardTitle} label={cardSubTitle}/>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>

            {showSocial && (
                <>
                    <div className="relative mb-4">
                        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                            <div className="w-[90%] border-t border-gray-200"/>
                        </div>
                        <div className="relative flex justify-center text-sm font-medium leading-6">
                            <span className="bg-white px-6 text-gray-900">или можно войти с помощью</span>
                        </div>
                    </div>

                    <CardFooter className={"flex justify-between"}>
                        <Social/>
                    </CardFooter>

                </>
            )}

            <CardFooter>
                <BackButton
                    label={backButtonLabel}
                    href={backButtonHref}
                />
            </CardFooter>
        </Card>
    )
}

export default CardWrapper
