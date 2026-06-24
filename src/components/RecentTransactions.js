import React from "react"

function RecentTransactions({transactions}){
    const categoryEmojis = {
    Salary: "💰",
    Groceries: "🛒",
    Dining: "🍽",
    Transport: "🚗",
    Entertainment: "🎭",
    Others: "📝",
  };
  
    return(
        <>
        {transactions.slice(-10).reverse().map((tx,index)=>(
            <li key={index}style={{listStyle:"none"}} className="transaction-item">
                <span className="Recent-Span">
                    {categoryEmojis[tx.category]} {tx.category}
                </span>
                <span>
                    {Number(tx.amount).toLocaleString('en-IN', {style: 'currency', currency: 'INR'})}
                </span>
            </li>
            
        ))}
        </>
    )
    
    
}

export default RecentTransactions;