"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import createExpenseImage from '@/app/assets/createExpense.jpg';
import styles from '@/app/components/create-expense/createExpense.module.css'; 

export default function CreateExpense() {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(e : any) {
    e.preventDefault();
    const data = {
      amount,
      category,
      date,
      description
    };
    try {
      const response = await fetch('/api/postExpense', {
        method: "POST",
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error('Failed to submit expense');
      }
      setDate('');
      setAmount('');
      setCategory('');
      setDescription('');
      alert('Expense submitted successfully');
    } catch (error) {
      console.error('Error submitting expense:', error);
      alert('Failed to submit expense');
    }
  }

  return (
    <form className={styles['form-container']} onSubmit={handleSubmit}>
      <Image
        className={styles['form-image']}
        height={240}
        width={240}
        src={createExpenseImage}
        alt="Create Expense Image"
      />
      <div>
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          placeholder='Amount in INR'
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Category</label>
        <input
          type="text"
          value={category}
          placeholder='Category of expense'
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          value={date}
          placeholder='date of expense'
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          value={description}
          placeholder='Description of expense'
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit" style={{ marginLeft: '0.8rem' }}>Submit</button>
    </form>
  )
}
