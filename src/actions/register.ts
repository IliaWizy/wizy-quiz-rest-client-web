"use server"

import * as z from "zod"
import {RegisterSchema} from "@/lib/zod-schema";
import {BACKEND_REGISTER_URL} from "@/lib/constants-url";

interface CreateUserResponse {
    email: string,
    password: string,
    name: string,
    avatar: string,
    role: string,
    id: number
}


export const register = async (values: z.infer<typeof RegisterSchema>): Promise<{
    error?: string,
    success?: string
}> => {
    try {
        const validatedFields = RegisterSchema.safeParse(values);
        if (!validatedFields.success) throw new Error("Не верные данные в заполнении!")
        const {email, password} = validatedFields.data

        const response = await fetch(BACKEND_REGISTER_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: `testcases ${Math.random() * 1000}`,
                avatar: "https://i.imgur.com/LDOOw4Qs.jpg",
                email,
                password,
            })
        });
        
        if (!response.ok) throw new Error("Ошибка при регистрации!")

        const {id, name, role}: CreateUserResponse = await response.json()
        return {success: `Пользователь зарегистрирован! \nID: ${id}, Имя: ${name}, Роль: ${role}`}

    } catch (e: any) {
        return {error: e.message}
    }
}
