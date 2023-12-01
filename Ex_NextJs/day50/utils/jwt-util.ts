// @ts-ignore
import jwt from "jsonwebtoken"
export const generateJwtFromUser = (data: any) => {
    return jwt.sign(data, process.env.NEXT_PUBLIC_JWT_SECRET, { expiresIn: 60 * 60 * 24})
}
export const verifyToken = (token: string) => {
    try {
        jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET);
        return true
    }catch (err: any){
        console.log(err.message)
        return false;
    }
}