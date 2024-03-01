"use server";

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { isEmpty } from "lodash";
import retreiveUserDataFromCookie from "./lib/retriveUserDataFromCookie";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

const protectedRoutes = ["/brevet"];

export const config = {
  matcher: "/brevet/:path*",
};

export default function middleware(req: NextRequest) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("authToken");

  if (!authToken) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  try {
    const isUserData = jwtDecode(authToken?.value as string);
    if (!isUserData) {
      const absoluteURL = new URL("/", req.nextUrl.origin);
      return NextResponse.redirect(absoluteURL.toString());
    }
  } catch (err) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
  // const useData = cookieStore.get("userData");
  // const isUserData = isEmpty(useData);
}
