import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export default function AddTransaction() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0)

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e =>{
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000000),
            text, 
            amount: +amount
        }

        addTransaction(newTransaction);
    }
  return (
    <>
        <h3>Add new Transaction</h3>
        <form onSubmit = {onSubmit}>
            <div className='form-control'>
                <label htmlFor='text'>Text</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='enter text' />
            </div>
            <div className='from-control'> 
                <label htmlFor='amount'>
                    Amount <br />  (negative - expenses, positive-income)
                </label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='enter text' />
            </div>
            <button className='btn'>Add transaction</button>
        </form>
    </>
  )
}

// const styles = StyleSheet.create({})