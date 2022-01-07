import "./App.css";
import { useState } from "react";
import ApiService from "./service/ApiService";

function App() {

  const [screen, setScreen] = useState("0");

  const createDigits =()=>{
    const digits=[];

    for(let i=0;i<10;i++){
      digits.push(
        <div className='btn' onClick={handDigitClick}>
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
    const parat = encodeURIComponent(screen)
    const { status, message } = await ApiService.getResult(parat);
   if (status === 'Success') {
     setScreen(message);
   } else {
     alert('pleae input correct data');
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
