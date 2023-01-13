import { useState } from 'react';
import './App.css';

function App() {

  let time = new Date().toLocaleTimeString();
  
  const [ctime, setCtime] = useState(time);
  
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  }

  setInterval(UpdateTime, 1000);
  return (
    <div className="App">
      <h1 style={{marginTop:'17rem', fontSize:'50px', fontFamily:'verdana'}}> {ctime} </h1>
    </div>
  );
}

export default App;
