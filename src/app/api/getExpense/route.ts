import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionSrt } from '@/app/lib/db';
import { expense } from "@/app/lib/model/expense";
export async function GET() {
    let data = [];
    let success = true;
    try {
        await mongoose.connect(connectionSrt);
        data = await expense.find();
    }
    catch {
        success = false;
    }
    return NextResponse.json({ result: data, success });
}
