import { jwtVerify } from 'jose';
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export const middleware = async(request) => {
    const { pathname } = request.nextUrl;
    try {
        let cookie = request.cookies.get('access-token')?.value;
        if (!cookie || !cookie.startsWith('Bearer ')) throw new Error('No access token');
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const token = cookie.split('Bearer ')[1];
        await jwtVerify(token, secret)
        return NextResponse.next()
    } catch (error) {
      return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/about', '/contact', '/magic-orb', '/tools/:path*', '/settings/:path*', '/account/:path*', '/library/:path*', '/shop/:path*'],
}