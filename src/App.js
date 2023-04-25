import React, { useState } from 'react';
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  function increment (){
    setCount(count +1)
    if (count >= 99) {
      setCount(0)
    }
  }

  function rest (){
    setCount(0)
  }
  return (
    <div className='eh'>
    <div className='box'>
      <button className='btn1' onClick={increment}>{count}</button>
      <h1 className='arab'>مسبحة</h1>
    </div>
    <button className='btn3'onClick={rest}>restart</button>
    </div>
      
  );
}

export default App;