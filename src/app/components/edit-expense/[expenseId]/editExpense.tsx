'use client'
import { useState, useEffect } from "react"

interface Expense {
    _id: string;
    date: string;
    amount: string;
    category: string;
    description: string;
}

export default function EditExpense() {
    const [expenses, setExpenses] = useState<Expense[]>([]); 

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/getExpense');
                if (!response.ok) {
                    throw new Error('Failed to fetch expenses');
                }
                const data = await response.json();
                if (data.success) {
                    setExpenses(data.result);  

                } else {
                    throw new Error('Failed to fetch expenses');
                }
            } catch (error) {
                console.error('Error fetching expenses:', error);
            }
        };
        fetchExpenses();
    }, []);   
    return (
        <main>
            <form>

            </form>
        </main>
    )
}