import {headers} from "next/headers";
import {NextResponse} from "next/server";

export async function GET() {
    const res = await fetch(process.env.NEXT_PUBLIC_MONGO_DB_CONNECTION_STRING!, {
        headers: <HeadersInit>{
            'Content-Type': 'application/json',
            // 'API-Key': process.env.DATA_API_KEY ?? "",
        },
    })
    const data = await res.json()

    return NextResponse.json({data})
}