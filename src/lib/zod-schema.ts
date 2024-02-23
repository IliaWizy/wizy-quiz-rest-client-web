import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({message: "Необходим email"}),
    password: z.string().min(6, {message: "Необходим пароль"}),
})

export const RegisterSchema = z.object({
    email: z.string().email({message: "Необходим email"}),
    password: z.string().min(6, {message: "Минимум 6 символов"}),
    confirm: z.string().min(6, {message: "Необходимо повторить пароль"}),
}).refine((data) => data.password == data.confirm, {
    message: "Пароль не совпадает",
    path: ["confirm"]
})
