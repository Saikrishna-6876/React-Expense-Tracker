import React, { useEffect } from "react";
import { useState, } from "react";
import { useLocation } from "react-router-dom";
import '../Styles/Addtransaction.css'
function Addtransaction(){
    const [type, setType] = useState("");
    const [amount, setAmount] = useState();
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [transaction, setTransaction] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const location=useLocation();
 
    function handleAddTransaction(e){
        if(!amount || !category || !description || !date){
           return alert("Please fill all the details")
        }

        

        const currentTransaction = {
            type,
            amount: Number(amount),
            category,
            description,
            date
        };
        let newTransaction;
        if (editIndex == null){
        newTransaction = [...transaction, currentTransaction];
        }else{
            newTransaction = [...transaction];
            newTransaction[editIndex] = currentTransaction;
        }
       
        setTransaction(newTransaction);
        localStorage.setItem("Transactions", JSON.stringify(newTransaction));
        if(editIndex !== null){
            alert(`${type} Updated Successfully`)
        }else{
            alert(`${type} Added Successfully`)
        }
        window.location.reload();
        setType("");
        setAmount("");
        setCategory("");
        setDescription("");
        setDate("");
        e.preventDefault();
    }
    useEffect(()=>{
        const existingTransaction = JSON.parse(localStorage.getItem("Transactions")) || [];
        setTransaction(existingTransaction);
        console.log(location.state);
        if(location.state && location.state.transaction){
        const transaction = location.state.transaction;
        setType(transaction.type);
        setAmount(transaction.amount);
        setCategory(transaction.category);
        setDescription(transaction.description);
        setDate(transaction.date);
        setEditIndex(transaction.index);
        }
    },[location])
    return(
        <div className="add-transaction-container">
            <h2>Add Transaction</h2>
           <div className="transaction-box">
                <div className="transaction-type">
                    <label>
                        <input type="radio" value="Expense" checked={type === "Expense"} onChange={()=>setType("Expense")}/> Expense
                    </label>
                    <label>
                        <input type="radio" value="Income" checked={type === "Income"} onChange={()=>setType("Income")}/> Income
                    </label>
                </div>
                <input type="Number" value={amount} placeholder="Amount (₹)" onChange={(e)=>setAmount(e.target.value)} className="amount-input"/>
                <select onChange={(e)=>setCategory(e.target.value)}>
                    <option value="">Select Category</option>
                    <option value="Salary">Salary</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Dining">Dining</option>
                    <option value="Transport">Transport</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Others">Others</option>
                </select>
                <textarea placeholder="Description" onChange={(e)=>setDescription(e.target.value)}></textarea>
                <input type="date" onChange={(e)=>setDate(e.target.value)}/>
                <button onClick={handleAddTransaction}>{editIndex==null ? 'Add Transaction' : 'Update Transaction'}</button>
           </div>
        </div>
    )

}

export default Addtransaction;