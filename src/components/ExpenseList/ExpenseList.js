import styles from "./ExpenseList.module.css";
import Transaction from "../Transaction/Transaction";

export default function ExpenseList({expenses, editExpense, deleteExpense}) {
  
  
  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
        {/* Display transactions here */}
        {
          expenses.map((expense, index)=>{
              return <Transaction key = {expense.id} expense = {expense} index = {expense.id} editExpense={editExpense} deleteExpense={deleteExpense}/>
          })
        }

      </ul>
    </div>
  );
  
}
