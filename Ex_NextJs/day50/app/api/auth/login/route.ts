import User from "@/models/user";
import {NextRequest, NextResponse} from "next/server";
import connectDB from "@/lib/mongodb";
import {json} from "stream/consumers";
import {ErrorResponse, ResponseApi} from "@/types/api-type";
import {generateJwtFromUser, verifyToken} from "@/utils/jwt-util";
// @ts-ignore
import bcrypt from 'bcrypt';
export const dynamic = 'force-dynamic'
export async function GET(request: Request) {

}
export async function POST(request: NextRequest){
    try {
        await connectDB();
        const {username, password} = await request.json()
        const user = await User.findOne({username});
        if(!user){
            return NextResponse.json(<ErrorResponse>{
                error: "Username not found",
                message: "Resource not found"
            }, {
                status: 404,
            })
        }
        if(!(await bcrypt.compare(password, user.password))){
            return NextResponse.json(<ErrorResponse>{
                error: "Password does not match",
                message: "Resource not found"
            }, {
                status: 404,
            })
        }
        const token = generateJwtFromUser({...user, password: ""})
        return NextResponse.json(<ResponseApi>{
            message: "Login successfully",
            body: {
                user: {...user._doc, password: ""}
            }
        }, {
            status: 200,
            headers: { 'Set-Cookie': `token=${token}` },
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