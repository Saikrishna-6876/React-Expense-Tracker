import React, { useEffect, useState } from "react";
import '../Styles/Dashboard.css'
import { Navigate, useNavigate } from "react-router-dom";
import Transactioncards from "../Components/Transactioncards";
import RecentTransactions from "../Components/RecentTransactions";
import NoTransactions from "../Components/NoTransactions";

function Dashboard(){
    const [transactions, setTransactions] = useState([]);
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [balance, setBalance] = useState(0);
    
    useEffect(()=>{
    const existingTransactions = JSON.parse(localStorage.getItem("Transactions")) || [];
    setTransactions(existingTransactions)

    let income = 0;
    let expense = 0;

    existingTransactions.forEach(tx=>{
        if(tx.type === "Income"){
            income += tx.amount;
        }else{
            expense += tx.amount;
        }
        setTotalIncome(income);
        setTotalExpense(expense);
        setBalance(income-expense);
    })
    },[])
    const navigate = useNavigate();
    return(
        <div className="dashboard">
            <div className="dashboard-inner">
                <h2>Dashboard</h2>
                <button className="add-transaction" onClick={()=>navigate('/addtransaction')}>+ Add Transaction</button>
            </div>
            <Transactioncards balance={balance} totalIncome={totalIncome} totalExpense={totalExpense}/>
            <div className="transactions-chart-row">
                <div className="transaction half-width">
                    <h3>Recent Transactions</h3>
                    {transactions.length === 0 ? <NoTransactions /> : <RecentTransactions transactions={transactions}/>} 
                    

                </div>
            </div>
        </div>
    )
}

export default Dashboard;