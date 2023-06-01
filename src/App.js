import { Button, Stack, TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';



function App() {

const [result,setResult] =useState()
const [firstnum,setFirstnum] = useState(0)
const [lastnum,setLastnum] = useState(0)

// console.log(firstnum);
// console.log(lastnum);

const handleadd =(e)=>{

  if(firstnum==0 || lastnum ==0){
    alert("Please enter valid Inputs!")
  }
  else{
  console.log(firstnum);
  console.log(lastnum);
  let output = firstnum + lastnum;
setResult(output);
  }
}

const handlesub =(e) =>{

  if(firstnum==0 || lastnum ==0){
    alert("Please enter valid Inputs!")
  }
  else{
    console.log(firstnum);
  console.log(lastnum);
  let output = firstnum-lastnum;
  setResult(output);
  }
}

const handlemultiplication =(e)=>{

  if(firstnum==0 || lastnum ==0){
    alert("Please enter valid Inputs!")
  }
  else{
  console.log(firstnum);
  console.log(lastnum);
  let output = firstnum*lastnum;
  setResult(output);
  }
}

const handledivision =(e)=>{

  if(firstnum==0 || lastnum ==0){
    alert("Please enter valid Inputs!")
  }
  else{
  console.log(firstnum);
  console.log(lastnum);
  let output = firstnum/lastnum;
  setResult(output);
  }
}

const handlereset =()=>{
  setFirstnum(0)
  setLastnum(0)
  setResult()
}

  return (
    <div className='App' >
      <div className='container'>
        <div className="heading">
          <h1 className='text-center'>Simple Calculator</h1>
        </div>

        <div className="total_card">
  <div className="card_text">
    <h3 className='result'>Result: <span> {result} </span> </h3> 
  </div>
</div>

<form className='form'>

<div className="input_field">
<TextField id="outlined-basic" label="Enter the First Number" variant="outlined" 
value={firstnum ||""}  onChange={e=>setFirstnum(Number(e.target.value))}/>
</div>
<div className="input_field">
<TextField id="outlined-basic" label="Enter the Second Number" variant="outlined"
value={lastnum ||""}  onChange={e=>setLastnum(Number(e.target.value))} />
</div>

{/* button */}

<Stack className='btn_group' direction="row" spacing={2}>
<Button style={{backgroundColor:'black',color:'white'}} className='btn' variant="contained"
onClick={handleadd}>
  <span>+</span>
</Button>
<Button style={{backgroundColor:'black',color:'white'}} className='btn' variant="outlined"
onClick={handlesub}>
  <span>-</span>
</Button>
<Button style={{backgroundColor:'black',color:'white'}} className='btn' variant="contained"
onClick={handlemultiplication}>
  <span>*</span>
</Button>
<Button style={{backgroundColor:'black',color:'white'}} className='btn' variant="outlined" 
onClick={handledivision}>
  <span>/</span>
</Button>
</Stack>

<Button style={{backgroundColor:'skyblue',color:'black',marginTop:'20px',marginLeft:'13rem'}} className='btnbtn'
onClick={handlereset}>
  <span style={{fontSize:'1rem'}}>Clear</span>
</Button>

</form>

      </div>
    </div>
  );
}

export default App;
