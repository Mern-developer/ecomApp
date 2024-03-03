
import { NextResponse } from "next/server";

export function middleware(request) {
    const path = request.nextUrl.pathname;
    const token = request.cookies.get("token")?.value || "";
console.log(token)
    if (!token && path.startsWith("/project-page/")) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    if (token && path === "/") {
        return NextResponse.redirect(new URL("/project-page/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/", "/project-page/:path*"],
};
