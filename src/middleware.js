import { NextResponse } from 'next/server';

export async function middleware(request) {
    const {pathname} = new URL(request.url);
    try {
        let token = request.cookies.get('token')?.value;
        if (!token) {
            return NextResponse.redirect(new URL(`/login?redirectUrl=${pathname}`, request.url))
        }
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