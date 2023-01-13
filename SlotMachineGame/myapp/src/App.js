
import React from 'react';
import './App.css'

const SlotM = (props) => {
  // let x = '⭐';
  // let y = '🚀';
  // let z = '⭐';
  
  let x = props.x;
  let y = props.y;
  let z = props.z;

  if (x === y && y === z){
    return(
      <>
      <div className="slot_inner">
        <h1> {x} {y} {z}</h1>
        <h1 style={{color:'green'}}>This is matching 🎉</h1>
        <hr/>
      </div>
      </>
    )
  }else{
    return(
      <>
      <div className="slot_inner">
        <h1> {x} {y} {z}</h1>
        <h1 style={{color:'red'}}>This is not matching !</h1>
        <hr/>
      </div>
      </>
    )
  }
}

function App() {
  return (
    <>
    <h1 style={{textAlign:'center', fontFamily:'verdana', fontWeight:'bold'}}> 🎰 SLOT MACHINE GAME 🎰</h1>
    <div>
    <SlotM x = '⭐' y = '⭐' z = '⭐'/>
    <SlotM x = '🚀' y = '⭐' z = '🚀'/>
    <SlotM x = '🌻' y = '🌻' z = '🌼'/>
    </div>
    </>
  );
}

export default App;
