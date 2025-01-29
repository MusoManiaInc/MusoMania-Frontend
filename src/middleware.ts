import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This runs before server responds to requests
export function middleware(request: NextRequest) {
  console.log("middleware is running yay");

  // Access cookies manually from headers
  const cookieHeader = request.headers.get("cookie");
  console.log("Cookie Header:", request.headers.get("cookie"));
  let token: string | undefined;

  if (cookieHeader) {
    const cookies = Object.fromEntries(cookieHeader.split("; ").map(c => c.split("=")));
    token = cookies["token"]; // Replace with your cookie name
  }

  console.log("Token:", token);

  // If no token, redirect to /auth/sign-in
  if (!token) {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  // Otherwise allow the request
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // Paths you want to protect
};
