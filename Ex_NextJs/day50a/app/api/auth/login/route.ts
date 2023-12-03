import {NextRequest, NextResponse} from "next/server";
import {ErrorResponse, SuccessResponse} from "@/types/api-type";
import {LoginRequest} from "@/types/auth-type";
import User from "@/model/user-model";
import {comparePassword} from "@/util/password-util";
import {connectMongoDB} from "@/libs/mongo-connect";

export async function POST(request: NextRequest, response: NextResponse) {
    try {
        const {email, password} = ( await  request.json()) as LoginRequest;

        await connectMongoDB();
       const loginUser = await User.findOne({ email: email })

        if(!loginUser) {
            return NextResponse.json(<ErrorResponse>{
                message : "Login not success",
                error: "Email not found"
            },{
                status: 404
            })
        }

        const checkPassword = await  comparePassword(password, loginUser.password);
        if(!checkPassword){
            return NextResponse.json(<ErrorResponse>{
                message : "Login not success",
                error: "Password doesn't match"
            },{
                status: 400
            })
        }
        return NextResponse.json(<SuccessResponse>{
            message : "Register successfully ",
            data: {...loginUser._doc, password: ""}
        }, {
            status: 200
        })
    }catch (e : any) {
        return NextResponse.json(<ErrorResponse>{
            message : "server error",
            error: e.message
        },{
            status: 500
        })
    }
}
