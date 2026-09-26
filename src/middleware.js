import { NextResponse } from "next/server";

const PROTECTED_ROUTES = [
    "/catalogue",
    "/display-centers",
    "/store-locator",
    "/room-visualizer",
    "/projects",
    "/news",
    "/profile"
];

export function middleware(request) {
    const { pathname } = request.nextUrl;

    // 1. Log every request to the terminal so we know middleware is actually alive
    console.log("🚨 MIDDLEWARE CHECKING ROUTE:", pathname);

    const isRestrictedRoute = PROTECTED_ROUTES.some(
        (route) => pathname === route || pathname.startsWith(`${route}/`)
    );

    if (isRestrictedRoute) {
        console.log("🛑 THIS IS A RESTRICTED ROUTE!");

        // 2. Grab all cookies and log their names so we can see what Better Auth is actually using
        const allCookies = request.cookies.getAll();
        console.log("🍪 COOKIES PRESENT:", allCookies.map(c => c.name));

        // 3. Ultra-permissive check: If any cookie has "session" or "auth" in the name, assume logged in
        const hasAuthSession = allCookies.some(cookie => 
            cookie.name.includes("session") || cookie.name.includes("auth")
        );

        if (!hasAuthSession) {
            console.log("❌ NO AUTH COOKIE FOUND. REDIRECTING...");
            const redirectUrl = new URL("/access-required", request.url);
            redirectUrl.searchParams.set("redirect", pathname);
            return NextResponse.redirect(redirectUrl);
        } else {
            console.log("✅ AUTH COOKIE FOUND. ACCESS GRANTED.");
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|images).*)",
    ]
};