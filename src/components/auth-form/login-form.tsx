"use client"
import CardWrapper from "./card-wrapper"
import {useForm} from "react-hook-form";
import {useFormState} from 'react-dom';
import {LoginSchema} from "@/lib/zod-schema";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import FormError from "@/components/form-error";
import FormSuccess from "@/components/form-success";
import {useState, useTransition} from "react";
import {authenticate} from "@/actions/login";

const LoginForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition()
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);

    const form = useForm<z.infer<typeof LoginSchema>>({
            resolver: zodResolver(LoginSchema),
            defaultValues: {
                email: "",
                password: ""
            }
        }
    )


    return (
        <CardWrapper
            cardTitle={"🔐 Auth"}
            cardSubTitle={"Добро пожаловать"}
            backButtonLabel={"Нет аккаунта?"}
            backButtonHref={"/sing-up"}
            showSocial
        >
            <Form {...form}>
                {/*                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className={"space-y-6"}
                >*/}
                <form
                    action={dispatch}
                    className={"space-y-6"}
                >
                    <div className={"space-y-4"}>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem className={"relative"}>
                                    <FormLabel
                                        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900">Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="john.doe@example.com"
                                            type="email"
                                            disabled={isPending}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({field}) => (
                                <FormItem className={"relative"}>
                                    <FormLabel
                                        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900">Пароль</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="******"
                                            type="password"
                                            disabled={isPending}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                    <Button
                                        size="sm"
                                        variant="link"
                                        asChild
                                        className="px-0 font-normal"
                                    >
                                        <Link href="/auth/reset">
                                            Забыли пароль?
                                        </Link>
                                    </Button>
                                </FormItem>
                            )}
                        />
                        {/*<FormError message={error}/>*/}
                        <FormError message={errorMessage}/>
                        <FormSuccess message={success}/>
                    </div>
                    <Button
                        type={"submit"}
                        className={"w-full"}
                        disabled={isPending}
                    >
                        Вход
                    </Button>

                </form>
            </Form>
        </CardWrapper>
    )
}

export default LoginForm
