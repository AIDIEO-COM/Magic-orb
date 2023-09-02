import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const body = await req.json();
    cookies().set({
        name: 'token',
        value: body,
        secure: true,
        httpOnly: true,
    })
    return NextResponse.json({ message: 'token created' })
}