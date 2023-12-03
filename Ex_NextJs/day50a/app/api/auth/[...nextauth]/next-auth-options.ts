import GithubProvider, {GithubProfile} from "next-auth/providers/github"
import CredentialsProvider, {CredentialInput} from "next-auth/providers/credentials"
import {OAuthUserConfig} from "next-auth/providers";
import {AuthOptions} from "next-auth";
import {JWTOptions} from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = <AuthOptions>{
    jwt: <Partial<JWTOptions>>{
        maxAge: 60 * 60 * 24
    },
    secret: process.env.JWT_SECRET as string,
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const res = await fetch("https://f8-fullstack-k1-fhrw.vercel.app/api/auth/login", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const {data: user} = await res.json()
                console.log(user)
                if (res.ok && user) {
                    return user
                }
                return null
            }
        }),
        GithubProvider(<OAuthUserConfig<GithubProfile>>{
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    callbacks: {
        redirect: params => {
            return "/"
        }
    }
}
