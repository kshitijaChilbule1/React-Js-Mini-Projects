import React from 'react';
import ReactDOM from 'react-dom';

const Greeting = () => {

    let current_date = new Date();
    current_date = current_date.getHours();
    let greeting = '';

    //get month name
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
    let Monthname = month[d.getMonth()];
    
    //get year
    let year = d.getFullYear();

    //get time
    let time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

    const cssStyle = {}

    if(current_date >= 1 && current_date < 12) {
        greeting = "Good Morning 🌻";
        cssStyle.color = 'green'
    }else if(current_date >= 12 && current_date <= 19){
        greeting = "Good Afternoon 🌇";
        cssStyle.color = "skyblue"
    }else{
        greeting = "Good  Night 🌃";
        cssStyle.color = '#191970'
    }
  return (
    <>
    <h1 style={{textAlign:'center', fontFamily:'verdana', fontSize:'70px',marginTop:'200px', display:'flex',alignItems:'flex-start', marginLeft:'100px', fontWeight:'100'}}>{time}</h1>
    <h1 style={{textAlign:'center', fontFamily:'verdana', fontSize:'80px',display:'flex',alignItems:'flex-start', marginLeft:'100px', marginTop:'-20px'}}><span style={cssStyle}>{greeting}</span></h1>
    <h1 style={{textAlign:'center', fontFamily:'verdana', fontSize:'30px', display:'flex',alignItems:'flex-start', marginTop:'-20px', marginLeft:'100px'}}>{current_date} {Monthname} {year}</h1>
    </>
  )
}

export default Greeting
