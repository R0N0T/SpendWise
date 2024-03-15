import { connectionSrt } from '@/app/lib/db';
import { expense } from "@/app/lib/model/expense";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function DELETE(request : any, response : any) {
    const expenseId = response.params.expenseId;
    const filter = { _id: expenseId };
    await mongoose.connect(connectionSrt);
    const result = await expense.deleteOne(filter);
    return NextResponse.json(result);
}
