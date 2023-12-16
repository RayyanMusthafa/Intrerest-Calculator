import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {

  const [amount,setAmount]=useState(0);
  const [year,setYear]=useState(0);
  const [rate,setRate]=useState(0);

  const [Interest,setInterest]=useState(0);

  console.log(amount,year, rate);

  const calculate=(e)=>{
    const output=amount*year*rate/100
    console.log(output);

    setInterest(output)
  }

  const reset=()=>{
    setInterest(0)
    setAmount(0)
    setRate(0)
    setYear(0)
  };
  

  return (
    <div className="App">
     <div className="container">

      {/* header */}
      <div className="header">
        <h1>Simple Interest Calculator</h1>
        <p>Calculate Your Simple Intrest With Us ❤️</p>
      </div>

      {/* Total */}
      <div className="total">
        <h3> &#x20B9;{Interest} </h3>
        <p>Your Total Interest</p>
      </div>

      {/* form */}
      <div className="form">
        <form action="">

            <div className="input">
            <TextField id="outlined-basic"  label="Amount" variant="outlined" value={amount||""} onChange={(e)=>setAmount(e.target.value)}/> <br /> <br />
            <TextField id="outlined-basic"  label="Year" variant="outlined" value={year||""} onChange={(e)=>setYear(e.target.value)}/>  <br /> <br />
            <TextField id="outlined-basic"  label="Rate" variant="outlined" value={rate||""} onChange={(e)=>setRate(e.target.value)} />  <br /> <br />
            </div> <br />

            <div className="button">
            <Button variant="contained" onClick={e=>calculate(e)}>Calculate</Button>
            <Button variant="text" onClick={reset}>Reset</Button>
            </div>


        </form>
      </div>


     </div>
    </div>
  );
}

export default App;
