import {withAuth} from "next-auth/middleware";
import {NextResponse} from "next/server";
import roles from "@/core/roles";

export default withAuth(
    function middleware(req) {
        let isTrener = req.nextauth.decoded?.roles.some(role => role.authority === roles.TRENER);

        if (req.nextUrl.pathname.startsWith("/user/list") && isTrener)
            return NextResponse.rewrite(
                new URL("/api/auth/signin?message=You Are Not Authorized!", req.url)
            );
    },
    {
        callbacks: {
            authorized: ({token}) => !!token,
        },

    }
);

export const config = {
    matcher: ["/user/list"],
};