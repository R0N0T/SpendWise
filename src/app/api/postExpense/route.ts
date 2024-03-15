import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionSrt } from '@/app/lib/db';
import { expense } from "@/app/lib/model/expense";
export async function POST(request: Request) {
    const payload = await request.json();
    await mongoose.connect(connectionSrt);
    let Expense = new expense(payload);
    const result = await Expense.save();
    if (!payload.amount || !payload.description || !payload.date || !payload.category) {
        return NextResponse.json({ error: "Invalid input" });
    }
    else {
        return NextResponse.json({ result, Success: "True" });
    }
}