import { NextResponse } from "next/server";

export async function POST(request: Request) {
    let payload = await request.json();
    console.log(payload);
    if(!payload.amount || !payload.description || !payload.date || !payload.category){
        return NextResponse.json({error: "Invalid input"});
    }
    return NextResponse.json({result: "Success"});
}