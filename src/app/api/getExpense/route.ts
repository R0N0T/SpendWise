import { NextResponse } from "next/server";
import mongoose from "mongoose";
import {connectionSrt} from '@/app/lib/db';
import { expense } from "@/app/lib/model/expense";
export async function GET(){
    await mongoose.connect(connectionSrt);
    const data = await expense.find({});
    return NextResponse.json({result:data});
}