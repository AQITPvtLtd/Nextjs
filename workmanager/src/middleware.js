import { NextResponse } from "next/server";
import { NextRequest } from "next/server";


export function middleware(request) {
    console.log("middleware executed")

    const authToken = request.cookies.get("authToken")?.value;

    if (
        request.nextUrl.pathname === "/api/login" ||
        request.nextUrl.pathname === "/api/users"
    ) {
        return;
    }

    const loggedInUserNotAccessPaths =
        request.nextUrl.pathname === "/login" ||
        request.nextUrl.pathname == "/signup";

    if (loggedInUserNotAccessPaths) {
        // access not secured route
        if (authToken) {
            return NextResponse.redirect(new URL("/profile/user", request.url));
        }
    }
    else {
        // accessing secured route
        if (!authToken) {

            if (request.nextUrl.pathname.startsWith("/api")) {
                return NextResponse.json({
                    message: "Access is not allowed !!",
                    success: false,
                },
                    {
                        status: 401,
                    }
                )
            }
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    console.log(authToken);
}


export const config = {
    matcher: [
        "/",
        "/login",
        "/signup",
        "/add-task",
        "/show-tasks",
        "/profile/:path*",
        "/api/:path*",
    ],
}