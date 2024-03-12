import expenses from '@/app/data.json';

interface Expense {
    date: string;
    amount: string;
    category: string;
    description: string;
}

export default function Expenses() {
    console.log(expenses);

    return (
        <main>
            <ul>
                {expenses.map((expense: Expense, index: number) => (
                    <li key={index}>
                        <div>Date : {expense.date}</div>
                        <div>Amount : {expense.amount}</div>
                        <div>Description : {expense.description}</div>
                        <div>Category : {expense.category}</div>
                    </li>
                ))}
            </ul>
        </main>
    );
}
