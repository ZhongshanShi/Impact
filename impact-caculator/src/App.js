import "./App.css";
import { useState } from "react";
import ApiService from "./service/ApiService";

function App() {

  const [screen, setScreen] = useState("");

  const createDigits =()=>{
    const digits=[];

    for(let i=0;i<10;i++){
      digits.push(
        <div className='btn' onClick={handDigitClick} key={i}>
        {i}
      </div>
      )
    }
    return digits;
  }
  
  const handDigitClick = (e) =>{
    setScreen((pre)=>pre+e.target.innerText);
}
 const handEqualClick = async ()=>{
    if(screen.includes("+")){
      const numbers = screen.split("+");
        const { status, message } = await ApiService.getAddResult(parseInt(numbers[0]),parseInt(numbers[1]));
        if (status === 'Success') {
          setScreen(message);
        } else {
          alert('please input correct data');
        }
    }else if(screen.includes("-")){
      const numbers = screen.split("-");
      const { status, message } = await ApiService.getSubtractResult(parseInt(numbers[0]),parseInt(numbers[1]));
      if (status === 'Success') {
        setScreen(message);
      } else {
        alert('please input correct data');
      }
    }else{
      const numbers = screen.split("×");
      const { status, message } = await ApiService.getMultiplyResult(parseInt(numbers[0]),parseInt(numbers[1]));
      if (status === 'Success') {
        setScreen(message);
      } else {
        alert('please input correct data');
      }
    }
  
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
        <div className='btn orange' onClick={handDigitClick}>
         × 
        </div>
        <div className='btn orange' onClick={handDigitClick}>
          +
        </div>
        <div className='btn orange' onClick={handDigitClick}>
          -
        </div>
        <div className='btn orange' onClick={handEqualClick}>
          =
        </div>
        {createDigits()}
        <div className='btn light-gray' onClick={handleResetClick}>
          AC
        </div>
      </div>
    </div>
  );
}

export default App;
