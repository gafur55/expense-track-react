import './App.css';
import React from 'react';
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";

function App() {
  return (
    <>
    <div className="App">
      <Header/>
      <div className='Container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
      </div>
    </div>
    </>
  );
}

export default App;
