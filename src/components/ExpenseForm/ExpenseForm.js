import { useState } from "react";
import styles from "./ExpenseForm.module.css";



export default function ExpenseForm(props){
    const {addExpense} = props;
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const handleSubmit = (e)=>{
      e.preventDefault();
      const newExpense = {
        id: Date.now(),
        text,
        amount: parseFloat(amount)
      }
      addExpense(newExpense);
    }

    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3>Add new transaction</h3>
        <label htmlFor="expenseText">Text</label>
        <input
          id="expenseText"
          className={styles.input}
          type="text"
          placeholder="Enter text..."
          required
          onChange={(e)=>setText(e.target.value)}
        />
        <div>
          <label htmlFor="expenseAmount">Amount</label>
          <div>(negative - expense,positive-income)</div>
        </div>
        <input
          className={styles.input}
          id="expenseAmount"
          type="number"
          placeholder="Enter amount..."
          required
          onChange={(e)=>{setAmount(e.target.value)}}
        />
        <button className={styles.submitBtn}>Add Transaction</button>
    </form>
  );
}
