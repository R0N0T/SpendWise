'use client'
import styles from "@/app/components/delete-expense/deleteExpense.module.css"
type DeleteExpenseProps = {
  id: string;
};
export default function DeleteExpense({ id }: DeleteExpenseProps) {
  const deleteExpense = async() => {
    try {
      const url = `/api/deleteExpense/${id}`;
      const response = await fetch(url, {
        method: "DELETE"
      });
      if (!response.ok) {
        throw new Error('Failed to delete expense');
      }
      const result = await response.json();
      console.log(result);
      alert('Expense deleted successfully');
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
  };

  return (
    <button onClick={deleteExpense} className={styles.button}>Delete</button>
  );
}
