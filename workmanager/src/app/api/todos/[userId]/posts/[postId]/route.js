import { NextResponse } from "next/server";

export function GET(request, {params}) {
    const { userId, postId} = params;
    console.log("User id: ", userId);
    console.log("Post id: ", postId);
    return NextResponse.json(params);
}