import "./App.css";
import { useState } from "react";
import ApiService from "./service/ApiService";

function App() {

  const [screen, setScreen] = useState("0");

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
    if(screen==="0"){
      setScreen(e.target.innerText);
    }else{
      setScreen((pre)=>pre+e.target.innerText);
    }
}
 const handEqualClick = async ()=>{
    if(screen.includes("+")){
      const numbers = screen.split("+");
        const { status, message } = await ApiService.getAddResult(parseInt(numbers[0]),parseInt(numbers[1]));
        helperFun(status,message);
    }else if(screen.includes("-")){
      const numbers = screen.split("-");
      const { status, message } = await ApiService.getSubtractResult(parseInt(numbers[0]),parseInt(numbers[1]));
      helperFun(status,message);
    }else{
      const numbers = screen.split("×");
      const { status, message } = await ApiService.getMultiplyResult(parseInt(numbers[0]),parseInt(numbers[1]));
      helperFun(status,message);
    }
  
}

const helperFun = (status,message)=>{
  if (status === 'Success') {
    setScreen(message);
  } else {
    alert('please input correct data');
  }

}

const handleResetClick =()=>{
    setScreen("0");
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
