/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import React, { useState } from "react";
import AccountBalance from './AccountBalance';

const Credits = (props) => {
  const { credits, balance, updateBalance, updateCreditList } = props;
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

const addCredit = (re) => {
    re.preventDefault()
    const updatedBalance = balance + parseFloat(amount);
    updateBalance(updatedBalance);
    const newCredit = {
      id: credits.length + 1,
      description,
      amount,
      date: new Date()
    };
    updateCreditList(newCredit);
  }

 return (
    <div style={{textAlign: 'center'}}>
      <h1> Credits </h1>
      <ul style={{listStyle: 'none', paddingLeft: 2em, textalign: 'center'}}>
        {credits.map((credit) => (
        <li key={credit.id}>
          <div className='credit-item'>
            <p><strong>Description:{credit.description}</p>
            <p><strong>Amount: ${parseFloat(credit.amount).toFixed(2)}</p>
            <p><strong>Date: {new Date(credit.date).toISOString().split('T')[0]}</p>
          </div>
        </li>
        }
      </ul> 
      <br/>
      <AccountBalance accountBalance={balance}/>
      <div className='credit-addition'>
        <h3>Add Credit</h3>
        <label htmlFor='description'>Description:</label>
        <input type="text" placeholder="Description" id="description" onChange={re => setDescription(re.target.value)}/>
        <label htmlFor='amount'>Amount:</label>
        <input type="number" placeholder="Amount" id="amount" onChange={re => setAmount(re.target.value)}/>
        <button onClick={addCredit}>Add Credit</button>
      </div>

      <br/>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Credits;
