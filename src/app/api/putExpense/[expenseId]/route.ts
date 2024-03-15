import { connectionSrt } from '@/app/lib/db';
import { expense } from "@/app/lib/model/expense";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request : any, response : any) {
    const expenseId = response.params.expenseId;
    const filter = { _id: expenseId };
    const payload = await request.json();
    await mongoose.connect(connectionSrt);
    const result = await expense.findOneAndUpdate(filter, payload);
    return NextResponse.json(result);
}
