// import { cookies, headers } from 'next/headers';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {


    // headers()
    // request.headers
    // cookies().get('token');

    const isAbout = request.url.includes('about');

    if (isAbout) {
        if (true) return NextResponse.next();
        else return NextResponse.redirect(new URL('/home', request.url));
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}