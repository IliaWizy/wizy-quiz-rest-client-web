"use client"
import {useForm} from "react-hook-form";
import {RegisterSchema} from "@/lib/zod-schema";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import CardWrapper from "@/components/auth-form/card-wrapper"
import FormError from "@/components/form-error";
import FormSuccess from "@/components/form-success";
import {useState, useTransition} from "react";
import {useRouter} from "next/navigation";
import {register} from "@/actions/register";

const RegisterForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition()
    const router = useRouter();

    const form = useForm<z.infer<typeof RegisterSchema>>({
            resolver: zodResolver(RegisterSchema),
            defaultValues: {
                email: "",
                password: "",
                confirm: ""
            }
        }
    )

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError("")
        setSuccess("")

        startTransition(() => {
            register(values)
                .then((data) => {
                    setSuccess(data.success)
                    setError(data.error)
                })
        })

        // router.push("/auth-form")
    }

    return (
        <CardWrapper
            cardTitle={"🔐 Reg"}
            cardSubTitle={"Добро пожаловать"}
            backButtonLabel={"Вход!"}
            backButtonHref={"/sing-in"}
            showSocial
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
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
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="confirm"
                            render={({field}) => (
                                <FormItem className={"relative"}>
                                    <FormLabel
                                        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900">Повторите
                                        пароль</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="******"
                                            type="password"
                                            disabled={isPending}
                                        />
                                    </FormControl>

                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormError message={error}/>
                        <FormSuccess message={success}/>
                    </div>
                    <Button
                        type={"submit"}
                        className={"w-full"}
                        disabled={isPending}
                    >
                        Зарегистрироваться
                    </Button>

                </form>
            </Form>
        </CardWrapper>
    )
}

export default RegisterForm
