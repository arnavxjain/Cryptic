import React, { useState, useContext } from 'react';
import { Loader } from '.';
import { TransactionContext } from '../context/TransactionContext';

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
    />
);

const Transaction = () => {

    const [sendState, setSendState] = useState("normal");

    const { connectWallet, currentAccount, formData, sendTransaction, handleChange, transactions, isLoading } = useContext(TransactionContext);

    const handleSubmit = () => {
        const { addressTo, amount, keyword, message } = formData;
        console.log(formData);

        if (!addressTo || !amount || !keyword || !message) return;
        
        sendTransaction();
        console.log(formData);
    }

    return (
        <div className='transactions'>
            <h1 style={{ textAlign: "center" }}>Transact</h1>
            <div className="transact-form">
                <div className="input-group">
                    <span>To (Address)</span><br />
                    <Input name='addressTo' type="text" handleChange={handleChange} />
                </div>
                <div className="input-group">
                    <span>Amount (ETH)</span><br />
                    <Input name='amount' type="text" handleChange={handleChange} />
                </div>
                <div className="input-group">
                    <span>Keyword</span><br />
                    <Input name='keyword' type="text" handleChange={handleChange} />
                </div>
                <div className="input-group">
                    <span>Message</span><br />
                    <Input name='message' type="text" handleChange={handleChange} />
                </div>
                {
                    !isLoading ? (
                        <button onClick={handleSubmit}>Send ETH</button>
                    ) : (
                        <Loader />
                    )
                }
            </div>
        </div>
    )
}

export default Transaction;