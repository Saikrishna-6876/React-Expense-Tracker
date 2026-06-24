import React from "react"

function Transactioncards({totalIncome,totalExpense,balance}){
    return(
        <div>
            <div className="balance-card">
                <p>Current Balance</p>
                <h1>₹{Number(balance)}</h1>
            </div>
            <div className="summary-cards">
                <div className="income-card">
                    <p>Total Income</p>
                    <h1 className="Income">₹{Number(totalIncome)}</h1>
                </div>
                <div className="expense-card">
                    <p>Total Expenses</p>
                    <h1 className="Expenses">₹{Number(totalExpense)}</h1>
                </div>
            </div>
        </div>
    )
}

export default Transactioncards;