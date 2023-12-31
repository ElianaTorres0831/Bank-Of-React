/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import "../css/Debit.css"
import React, { useState } from "react";
import AccountBalance from './AccountBalance';

const Debits = (props) => {
  // Create the list of Debit items
    const { debits, balance, updatedDebit, updateBalance } = props;
    const [description, setDescription] = useState('');
    const [amount, setAmt] = useState('');
  let DebitsView = () => {
      const addDebit = (re) => 
      {
        re.preventDefault()
        const newBal = balance + parseFloat(amount);
        updateBalance(newBal);

        const newDebit = 
        {
          id: debits.length = 1,
          description,
          amount,
          date: new Date()
        };

        updatedDebit(newDebit);

      };
  }
  // Render the list of Debit items and a form to input new Debit item
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Debits</h1>
      <ul style={{listStyle: 'none', paddingLeft: 0, textalign: 'center'}}>
        {debits.map((debit) => (
        <li key={debit.id}>
          <div className='debits'>
            <p>Description: {debit.description}</p>
            <p>Amount:${parseFloat(debit.amount).toFixed(2)}</p>
            <p>Date:{new Date(debit.date).toISOString().split('T')[0]}</p>
          </div>
        </li>
        ))}
      </ul>
      <br/>
      <AccountBalance accountBalance={balance}/>
      <div className='debit-addition'>
        <h3>Debit</h3>
        <label htmlFor='description'>Description:</label>
        <input type="text" placeholder="Description" id="description" onChange={re => setDescription(re.target.value)}/>
        <label htmlFor='amount'>Amount:</label>
        <input type="number" placeholder="Amount" id="amount" onChange={re => setAmt(re.target.value)}/>
        <button type='submit'>Add Debit</button>
      </div>

      <br/>
      <Link to="/">Return to Home</Link>
    </div>
  );
}
export default Debits;
