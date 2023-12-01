import User from "@/models/user";
import {NextRequest, NextResponse} from "next/server";
import connectDB from "@/lib/mongodb";
import {ErrorResponse, ResponseApi} from "@/types/api-type";
// @ts-ignore
import bcrypt from 'bcrypt';

export const dynamic = 'force-dynamic'
export async function GET(request: Request) {

}
export async function POST(request: NextRequest){
    try {
        await connectDB();
        const {username, password, name} = await request.json()
        const userExists = await User.exists({username});
        if(userExists){
            return NextResponse.json(<ErrorResponse>{
                error: "Username already exists",
                message: "Register failed"
            }, {
                status: 400,
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const registeredUser = await User.create({
            username, password: hashedPassword, name
        })
        return NextResponse.json(<ResponseApi>{
            message: "Register successfully",
            body: {
                username: registeredUser.username,
                name: registeredUser.name
            }
        }, {
            status: 200,
        })
    } catch(err: any){
        return NextResponse.json(<ErrorResponse>{
            error: err.message,
            message: "Server error"
        }, {
            status: 500
        })
    }
}