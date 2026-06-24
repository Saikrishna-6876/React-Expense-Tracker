import React from "react";
import { useState } from "react";
import '../Styles/Transactions.css';
import { useNavigate } from "react-router-dom";
import NoTransactions from "../Components/NoTransactions";

function Transaction(){
    const navigate= useNavigate();
    const existingTransactions = JSON.parse(localStorage.getItem("Transactions")) || [];
    const [Transaction, setTransaction] = useState(existingTransactions);
    const categoryEmojis = {
    Salary: "💰",
    Groceries: "🛒",
    Dining: "🍽",
    Transport: "🚗",
    Entertainment: "🎭",
    Others: "📝",
  };

    function handleEdit(index){
        const editTransaction = Transaction[index];
        navigate("/addtransaction",{state:{transaction:{...editTransaction,index}}})
    }

    function handleDelete(index){
        const updatedtransactions = Transaction.filter((data,i)=>i!==index);
        setTransaction(updatedtransactions);
        localStorage.setItem("Transactions", JSON.stringify(updatedtransactions));

    }
    return(
        <div className="transactions-container">
        <h2>All Transactions</h2>
        {Transaction.length === 0 ? <NoTransactions /> :
        <table>
            <thead>
                <tr>
                    <th>category</th>
                    <th>description</th>
                    <th>amount</th>
                    <th>date</th>
                    <th>type</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {Transaction.map((tx, index)=>(
                    <tr key={index}>
                        <td>{categoryEmojis[tx.category]}{tx.category || 'No Category'}</td>
                        <td>{tx.description || 'No Description'}</td>
                        <td className={tx.type==="Income"?"Income":"Expense"}>{Number(tx.amount).toLocaleString('en-In',{style:"currency", currency:"INR"})}</td>
                        <td>{tx.date}</td>
                        <td>{tx.type}</td>
                        <td>
                            <div className="action-buttons">
                                <button className="edit-btn" onClick={()=>handleEdit(index)}>✏️</button>
                                <button className="delete-btn" onClick={()=>{handleDelete(index)}}>🗑 </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
}
        </div>
            
    )

}

export default Transaction;