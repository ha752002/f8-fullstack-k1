import {verifyToken} from "@/utils/jwt-util";
import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest) {
    return NextResponse.json({isLogged: verifyToken(request.cookies.get("token")?.value!)})
}