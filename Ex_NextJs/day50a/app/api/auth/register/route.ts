import {NextRequest, NextResponse} from "next/server";
import {RegisterRequest} from "@/types/auth-type";
import {ErrorResponse, SuccessResponse} from "@/types/api-type";
import {emailValidate, passwordValidate} from "@/util/string-util";
import {connectMongoDB} from "@/libs/mongo-connect";
import User from "@/model/user-model";
import {hashPassword} from "@/util/password-util";

// export const dynamic = 'force-dynamic'
export async function POST(request: NextRequest) {
    try {
        const {email, password, name} = (await request.json()) as RegisterRequest;
        if (!(email || password || name)) {
            return NextResponse.json(<ErrorResponse>{
                message : "Not validate",
                error: "Missing data field"
            }, {
                status: 400
            })
        }

        if(!(emailValidate(email)) ||  !(passwordValidate(password))){
            return NextResponse.json(<ErrorResponse>{
                message : "Not validate",
                error: "Not validated yet"
            }, {
                status: 400
            })
        }


        await connectMongoDB();
        if(await User.exists({email})){
            return NextResponse.json(<ErrorResponse>{
                message : "Not validate",
                error: "Email already exists"
            }, {
                status: 400
            })
        }
        const hashedPassword = await hashPassword(password);
        const registeredUser = await User.create({email, password: hashedPassword, name});
        return NextResponse.json(<SuccessResponse>{
            message : "Register successfully ",
            data: registeredUser
        }, {
            status: 201
        })
    }catch (e : any){
        return NextResponse.json(<ErrorResponse>{
            message : "server error",
            error: e.message
        }, {
            status: 500
        })
    }
}
export async function GET(request: NextRequest) {
    // console.log(request)
    return NextResponse.json(1);
}

