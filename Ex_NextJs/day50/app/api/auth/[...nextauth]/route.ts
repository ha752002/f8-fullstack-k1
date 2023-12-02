import NextAuth, { Session} from "next-auth"
import {authOptions} from "@/app/option/authOptions";



const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}