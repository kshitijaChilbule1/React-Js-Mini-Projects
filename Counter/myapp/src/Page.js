import React from 'react';
import './Page.css';
import {useState} from 'react';

const Page = () => {

  const [num, setNum] = useState(0);
  function Increment() {
    setNum(num + 1);
  }
  function Reset(){
    setNum(0)
  }
  function Decrement(){
    setNum(num - 1)
  }
  return (
    <>
    <div class="container">
    <h1 style={{textAlign:'center', fontSize:'100px'}}>{num}</h1>
      <div className="btn-grp">
        <button onClick={Increment} style={{width:'90px', height:'40px', margin:'4px', backgroundColor:'gray', color:'#fff', border:'none'}}>Increment</button>
        <button onClick={Reset} style={{width:'90px', height:'40px', margin:'4px', backgroundColor:'gray', color:'#fff', border:'none'}}>Reset</button>
        <button onClick={Decrement} style={{width:'90px', height:'40px', margin:'4px', backgroundColor:'gray', color:'#fff', border:'none'}}>Decrement</button>
      </div>
    </div>
    </>
  )
}

export default Page;
