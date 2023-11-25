import {NextRequest, NextResponse} from "next/server";

const isLogin = true;

export function middleware(request) {
    const pathname = request.nextUrl.pathname;
    // console.log(pathname)
    const response = NextResponse.next();
    response.cookies.set("email", "ha");
    if (pathname === "/don-hang") {
        return NextResponse.rewrite(new URL('/orders', request.url))
    }
    if (!isLogin) {
        return NextResponse.redirect(new URL("/login", request.url))
    }

}

export const config = {
    matcher: ["/admin/:path*", "/orders/:path*", "/don-hang/:path*"]
}