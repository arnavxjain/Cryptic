import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import dummyData from '../utils/dummyData';
import TransactionCard from './TransactionCard';

const Transactions = () => {

    const { connectWallet, currentAccount, formData, sendTransaction, handleChange, transactions } = useContext(TransactionContext);

    return (
        <div className='transactions-section'>
            {
                currentAccount ? (
                    <h2>Latest transactions</h2>
                ) : (
                    <h2>Connect to view latest transactions</h2>
                )
            }

            <div className="trans-grid">
                {
                    transactions.reverse().map((transaction, i) => {
                        return (
                            <TransactionCard key={i} {...transaction}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Transactions;