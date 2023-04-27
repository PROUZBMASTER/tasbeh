import React, { useState } from 'react';
import './App.css'
import "./img/islam.jpg"
import audio2 from './img/click.mp3'
function App() {

  const [count, setCount] = useState(0)
  let increment = () => {
    if (count >= 99) {
      setCount(0);
    } else {
      setCount(count + 1);
      new Audio(audio2).play()
    }
  }
  
  const rest = () => {
    if (count > 0) {
      if (window.confirm("Restart ?")) {
        setCount(0)
        new Audio(audio2).play()
      } else {
        return
      }
    } else {
      return
    }
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

