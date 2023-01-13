import './App.css';
import {useState} from 'react';

function App() {
  const[name, setName] = useState();
  const [fullName, setFullName] = useState();

  const inputEvent = (event) => {
    setName(event.target.value);
  }

  const onSubmit = () => {
    setFullName(name);
  }
  return (
    <>
    <div className='container'>
      <h1>Hello, {fullName}</h1>
      <input type="text" placeholder="Enter Your Name" onChange={inputEvent}/>
      <button onClick={onSubmit} type="submit">Click Me</button>
    </div>
    </>
  );
 
  }
export default App;
