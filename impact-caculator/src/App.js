import "./App.css";
import { useState } from "react";

function App() {

  const [screen, setScreen] = useState("");
  
  const handDigitClick = (e) =>{
    setScreen((pre)=>pre+e.target.innerText);
}
const handEqualClick = ()=>{
    // setScreen();

}
const handOperatorClick =(e)=>{
    setScreen((pre)=>pre+e.target.innerText);

}
const handleResetClick =()=>{
    setScreen("");
}
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='screen'>
          {screen}
        </div>
        <div className='btn' onClick={handDigitClick}>
          7
        </div>
        <div className='btn' onClick={handDigitClick}>
          8
        </div>
        <div className='btn' onClick={handDigitClick}>
          9
        </div>
        <div className='btn orange' onClick={handOperatorClick}>
          X
        </div>
        <div className='btn' onClick={handDigitClick}>
          4
        </div>
        <div className='btn' onClick={handDigitClick}>
          5
        </div>
        <div className='btn' onClick={handDigitClick}>
          6
        </div>
        <div className='btn orange' onClick={handOperatorClick}>
          +
        </div>
        <div className='btn' onClick={handDigitClick}>
          1
        </div>
        <div className='btn' onClick={handDigitClick}>
          2
        </div>
        <div className='btn' onClick={handDigitClick}>
          3
        </div>
        <div className='btn orange' onClick={handOperatorClick}>
          -
        </div>
        <div className='btn zero' onClick={handDigitClick}>
          0
        </div>
        <div className='btn' onClick={handEqualClick}>
          =
        </div>
        <div className='btn light-gray' onClick={handleResetClick}>
          AC
        </div>
      </div>
    </div>
  );
}

export default App;
