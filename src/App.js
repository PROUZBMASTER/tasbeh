import React, { useState } from 'react';
import './App.css'
import "./img/islam.jpg"
function App() {

  const [count, setCount] = useState(0)
  function increment (){
    setCount(count +1)
    if (count >= 99) {
      setCount(0)
    } 
  }
  
  function rest (){
    prompt("Restart = ok")
    setCount(0)
  }

  return (
    <div className='eh'>
    <div className='box'>
      <button className='btn1' onClick={increment}>{count}</button>
      <h1 className='arab'>مسبحة</h1>

    </div>
    <button className='btn3'onClick={rest}>Restart</button>
    </div>
      
  );
}
<script type='text/javascript'>

</script>

export default App;

