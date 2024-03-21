'use client'
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from 'next/image';
import createExpenseImage from '@/app/assets/createExpense.jpg';
import styles from '@/app/components/edit-expense/editExpense.module.css'; // Import CSS module

interface Expense {
    _id: string;
    date: string;
    amount: string;
    category: string;
    description: string;
}

export default function EditExpense() {
    const pathname = usePathname();
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [editExpense, setEditExpense] = useState<Expense | null>(null);

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const response = await fetch('/api/getExpense');
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
    
    const id = pathname.slice(14); 
    useEffect(() => {
        const filteredExpense = expenses.find(expense => expense._id === id);
        if (filteredExpense) {
            setEditExpense(filteredExpense);
            setAmount(filteredExpense.amount);
            setCategory(filteredExpense.category);
            setDate(filteredExpense.date);
            setDescription(filteredExpense.description);
        }
    }, [expenses, pathname]);
    async function handleEdit(e: any) {
        e.preventDefault(); 
        try {
            let result = await fetch(`/api/putExpense/${id}`, {
                method: "PUT",
                body: JSON.stringify({ amount, category, date, description }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!result.ok) {
                throw new Error('Failed to update expense');
            }
            result = await result.json();
            alert(`Expense edited successfully`); 
            console.log(result);
        } catch (error) {
            console.error('Error updating expense:', error);
        }
    }
    

    return (
        <form className={styles.formContainer} onSubmit={handleEdit}>
            {editExpense && <>
                <Image
                className={styles.image}
                height={200}
                width={200}
                src={createExpenseImage}
                alt="Create Expense Image"
              />
                <ul key={editExpense._id}>
                    <div>
                        <label className={styles.label}>Amount</label>
                        <input
                            className={styles.inputField}
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className={styles.label}>Category</label>
                        <input
                            className={styles.inputField}
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className={styles.label}>Date</label>
                        <input
                            className={styles.inputField}
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className={styles.label}>Description</label>
                        <input
                            className={styles.inputField}
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </ul>
            </>}
            <button className={styles.submitButton} type="submit" style={{marginLeft:'2rem'}}>Submit</button>
        </form>
    )
}
