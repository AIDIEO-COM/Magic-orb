import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose'

export async function middleware(request) {
    const {pathname} = new URL(request.url);
    try {
        let cookie = request.cookies.get('jwt-token')?.value;
        if (!cookie || !cookie.startsWith('Bearer ')) throw new Error('Invalid token');
        const secret = new TextEncoder().encode(process.env.JWT_SECRET)
        await jwtVerify(cookie.split("Bearer ")[1], secret)
        return NextResponse.next()
    } catch (error) {
        console.log(error.message)
        return NextResponse.redirect(new URL(`/login?redirectUrl=${pathname}`, request.url))
    }
}

// See "Matching Paths" and private routes below 
export const config = {
    matcher: ['/about', '/contact', '/magic-orb', '/tools/:path*', '/settings/:path*', '/account/:path*', '/library/:path*', '/shop/:path*'],
}