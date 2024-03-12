"use client"
import {useState} from 'react';
import Image from 'next/image';
import createExpenseImage from '@/app/assets/createExpense.jpg' 
export default function createExpense () {

    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit (e : any) {
        e.preventDefault();
        setDate('');
        setAmount('');
        setCategory('');
        setDescription('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <Image 
                height={400}
                width={400}
                src={createExpenseImage} 
                alt="Create Expense Image"
            />
            <div>
                <label>Amount</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Category</label>
                <input 
                    type="text"
                    value={category}
                    onChange={(e)=> setCategory(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Date</label>
                <input 
                    type="text"
                    value={date}
                    onChange={(e)=> setDate(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Description</label>
                <input 
                    type="text"
                    value={description}
                    onChange={(e)=> setDescription(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
} 