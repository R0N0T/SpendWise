'use client'
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
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
  };

  return (
    <button onClick={deleteExpense}>Delete</button>
  );
}
