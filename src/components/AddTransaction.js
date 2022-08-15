import React, {useState} from 'react'

export default function AddTransaction() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0)
  return (
    <>
        <h3>Add new Transaction</h3>
        <form>
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