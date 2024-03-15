'use client';
import styles from '@/app/components/expenses.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import DeleteExpense from './deleteExpense';
import EditExpense from './edit-expense/editExpense';

interface Expense {
    _id: string;
    date: string;
    amount: string;
    category: string;
    description: string;
}

export default function Expenses() {
    const [expenses, setExpenses] = useState<Expense[]>([]); 

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const response = await fetch('api/getExpense');
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
    if (expenses.length === 0) {
        return <div>No Transactions added</div>;
    }
    return (
        <main className={styles.main}>
            {expenses.map((expense: Expense) => (
                <ul key={expense._id} className={styles.expenseContainer}>
                    <div>
                        <div>{expense.category}</div>
                        <div>{expense.description}</div>
                        <div>{expense.date}</div>
                    </div>
                    <div className={styles.amountContainer}>-₹{expense.amount}</div>
                    <div>
                        <Link href={`/edit-expense/${expense._id}`}>
                            <button>Edit</button>
                        </Link>
                        <DeleteExpense id={expense._id}/>
                    </div>
                </ul>
            ))}
        </main>
    );
}
