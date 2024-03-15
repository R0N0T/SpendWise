import mongoose from "mongoose";

const expenseModel = new mongoose.Schema({
    date:String,
    amount:String,
    category:String,
    description:String
});

export const expense = mongoose.models.expenses || mongoose.model('expenses',expenseModel);