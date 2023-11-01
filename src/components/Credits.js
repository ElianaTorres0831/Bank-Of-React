/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

const Credits = (props) => {
  const { credits, balance, updateBalance, updateCreditList } = props;
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');


const Credits = (props) => {
  return (
    <div>
      <h1>Credits</h1>
    <ul style={{listStyle: 'none', paddingLeft: 0, textalign: 'center'}}>
    
      <br/>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Credits;
