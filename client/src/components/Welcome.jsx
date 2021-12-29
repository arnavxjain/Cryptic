import React, { useState , useContext } from 'react';
import eth from "../assets/eth.png";
import { TransactionContext } from '../context/TransactionContext';

const Welcome = () => {

    const { connectWallet, currentAccount, formData, setFormData, handlechange, logOutOfMetaMask } = useContext(TransactionContext);

    // console.log(value);

    const [authState, setAuthState] = useState("out");

    return (
        <div className='welcome'>
            <h1>Pave the way into <br></br> the future</h1>
            {
                currentAccount ? (
                    <>
                        <div className="card">
                            <img src={eth} />
                            <h2 style={{ marginLeft: 35 }}>Connected</h2>
                            {/* <h2>Ethereum</h2> */}
                            <h2 className='card-holder'>Ethereum</h2>
                            <small className='card-number'>{currentAccount}</small>
                        </div>
                        {/* <button onClick={logOutOfMetaMask} style={{ marginTop: 15, marginLeft: 5 }}>Log Out</button> */}
                    </>
                ) : (
                    <div className="card">
                        <img src={eth} />
                        <h2 style={{ marginLeft: 35 }}>Ethereum</h2>
                        <h2 className='card-holder'>User Name</h2>
                        <small className='card-number'>0x..../ETH Address</small>
                        <div className="glass-cover"></div>
                        <button onClick={connectWallet} className="abs-btn">CONNECT</button>
                    </div>
                )
            }
        </div>
    )
}

export default Welcome;