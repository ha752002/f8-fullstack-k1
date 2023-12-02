import {AuthOptions} from "next-auth";
import GithubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import {apiClient} from "@/services/api";

export const authOptions: AuthOptions = {
    secret: process.env.NEXT_PUBLIC_JWT_SECRET,
    jwt: {maxAge: 60 * 60 * 24},
    callbacks:{

        async redirect({ url, baseUrl }) {
            return "/"
        },
    },
    providers: [
        GithubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID!,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET!,
        }),
        Credentials({
            name: 'Credentials',
            credentials: {
                username: {
                    label: 'Username',
                    type: 'text',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                try{
                    const { username, password } = credentials as {
                        username: string
                        password: string
                    }
                    // console.log(username, password)
                    const response = await apiClient.post("/api/auth/login", {username, password});
                    // console.log(response)
                    const { body: {user} } = response.data
                    // console.log(user)
                    console.log("User", user)
                    if (!user) {
                    }
                    return user
                } catch (err: any){
                    console.log(err)
                }
            },
        })
    ]
}