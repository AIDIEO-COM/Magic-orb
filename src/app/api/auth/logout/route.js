import { NextResponse } from "next/server";

export const POST = async (req) => {
    const res = new NextResponse(
        JSON.stringify({ message: 'logged out' })
    )
    res.cookies.set("token", "", {
        expires: new Date(Date.now()),
    })
    return res;
}