import styles from "./Transaction.module.css";
import EditImage from "../../images/edit.png";
import DeleteImage from "../../images/trash-bin.png";
import { useState } from "react";

export default function Transaction({ expense, index, deleteExpense, editExpense }) {
  const [currentHoverIndex, setCurrentHoverIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(expense.text);
  const [editAmount, setEditAmount] = useState(expense.amount);

  const handleSave = () => {
    setIsEditing(false);
    const updatedExpense = { ...expense, text: editText, amount: editAmount };
    editExpense(updatedExpense, expense.id);
  };

  return (
    <li
      key={expense.id}
      className={`${styles.transaction} ${
        expense.amount > 0 ? styles.profit : styles.loss
      }`}
      onMouseOver={() => {
        setCurrentHoverIndex(index);
      }}
      onMouseLeave={() => {
        setCurrentHoverIndex(null);
      }}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <input
            type="number"
            value={editAmount}
            onChange={(e) => setEditAmount(Number(e.target.value))}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <div>{expense.text}</div>
          <div className={styles.transactionOptions}>
            <div
              className={`${styles.amount} ${
                currentHoverIndex === index && styles.movePrice
              }`}
            >
              ${expense.amount}
            </div>
            <div
              className={`${styles.btnContainer} ${
                currentHoverIndex === index && styles.active
              }`}
            >
              <div className={styles.edit} onClick={() => setIsEditing(true)}>
                <img src={EditImage} height="100%" alt="Edit" />
              </div>
              <div
                className={styles.delete}
                onClick={() => deleteExpense(expense.id)}
              >
                <img src={DeleteImage} height="100%" alt="Delete" />
              </div>
            </div>
          </div>
        </>
      )}
    </li>
  );
}
