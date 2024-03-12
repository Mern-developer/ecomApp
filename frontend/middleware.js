
import { NextResponse } from "next/server";

export function middleware(request) {
    const path = request.nextUrl.pathname;
    const token = request.cookies.get("jwt")?.value || "";
// console.log(token)
    if (!token && path.startsWith("/product-page")) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    if (token && path === "/") {
        return NextResponse.redirect(new URL("/product-page/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/", "/product-page/:path*"],
};
