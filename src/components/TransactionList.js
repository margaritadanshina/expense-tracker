import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction'

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list"></ul>
            {transactions.map(transaction => ( <Transaction key={transaction.id}transaction={transaction} />
            ))}
        </div>
    )
}

export default TransactionList;