export interface TokensResponse {
    access_token: string
    refresh_token: string
}

export interface UserResponse {
    id: number
    email: string
    password?: string
    name: string
    role: string
    avatar?: string
}
