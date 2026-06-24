import React from "react"
import { MdInsertPageBreak } from "react-icons/md";
import '../Styles/NoTransaction.css'
function NoTransactions(){
    return(
        <div className="no-transactions">
            <MdInsertPageBreak className="no-transactions-icon"/>
            <h3>No Transactions Found</h3>
        </div>
    )
}

export default NoTransactions;

//