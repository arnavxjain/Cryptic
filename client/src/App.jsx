import Sidebar from "./components/Sidebar"
import { Loader, Welcome, Transaction } from './components';
import { useState } from "react";

import transact from "./assets/transact.png";
import cash from "./assets/cash.png";
import doc from "./assets/doc.png";
import Transactions from "./components/Transactions";

const App = () => {


  return (
    <div className="App">
      <Sidebar />

      <div className="start">
        <header className="header">
          <h1>Cryptic</h1>
          <a href="">Learn More</a>
        </header>
        <div className="main">
          <Welcome />
          <Transaction />
        </div>
      </div>

      <Transactions />

      <div className="footer">
        <span>Cryptic 2022 | Blockchain | Web 3.0 | Solidity | Ethereum | React</span>
      </div>
    </div>
  )
}

export default App
