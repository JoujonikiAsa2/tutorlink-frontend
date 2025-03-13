import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./service/AuthService";
const authRoutes = ["/login", "/register"];

type Role = keyof typeof roleBasedPrivateRoutes;
const roleBasedPrivateRoutes = {
  student: [/^\/student/],
  tutor: [/^\/tutor/],
  admin: [/^\/admin/],
};
export const middleware = async (req: NextRequest) => {
  const { pathname } = req.nextUrl;
  const userInfo = await getCurrentUser();
  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`http://localhost:3000/login?redirectPath=${pathname}`, req.url)
      );
    }
  }

  if (userInfo.role && roleBasedPrivateRoutes[userInfo?.role as Role]) {
    const routes = roleBasedPrivateRoutes[userInfo?.role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/", req.url));
  }
};

export const config = { matcher: ["/admin", "/admin/:page", "/student", "/student/:page", "/tutor", "/tutor/:page"] };
