import expenses from '@/app/data.json';
import styles from '@/app/components/expenses.module.css'

interface Expense {
    date: string;
    amount: string;
    category: string;
    description: string;
}

export default function Expenses() {
    // console.log(expenses);

    return (
        <main className={styles.main}>
            {expenses.map((expense: Expense, index: number) => (
                <ul key={index} className={styles.expenseContainer}>
                    <div>
                        <div>{expense.category}</div>
                        <div>{expense.description}</div>
                        <div>{expense.date}</div>
                    </div>
                    <div className={styles.amountContainer}>-₹{expense.amount}</div>
                </ul>
            ))}
        </main>
    );
}
