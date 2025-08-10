import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const { userId } = params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const data = await res.json();
    return NextResponse.json(data);
}