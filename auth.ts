import NextAuth from 'next-auth';
import {authConfig} from './auth.config';
import Credentials from "@auth/core/providers/credentials";
import {LoginSchema} from "@/lib/zod-schema";
import {TokensResponse, UserResponse} from "@/lib/dto";

export const {auth, signIn, signOut} = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials, request) {
                const parsedCredentials = LoginSchema.safeParse(credentials);

                if (parsedCredentials.success) {
                    const {email, password} = parsedCredentials.data;

                    const tokens = await login(email, password);
                    if (!tokens) return null;

                    console.log(tokens)

                    const user = await getUserInfo(tokens.access_token);

                    console.log(user)
                    
                    return {
                        name: user.name,
                        email: user.email,
                    }
                }

                console.log('Invalid credentials');
                return null;
            }
        }),
    ],
});


const getUserInfo = async (access_token: string): Promise<UserResponse> => {
    try {
        const response = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
};


const login = async (email: string, password: string): Promise<TokensResponse | undefined> => {
    try {
        const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password}),
        });

        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}
