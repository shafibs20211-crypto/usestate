import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
const [obtMarks,setObtMarks]=useState(0)
const [totalMarks,setTotalMarks]=useState(0)
const[percentage,setPercentage]=useState(0)
const [weight,setWeight]=useState(0)
const[hight,setHight]=useState(0)
const [bmi,setBmi]=useState(0)
function bmiCalculate(e){
   e.preventDefault();
   const bmi=weight/hight**2
   setBmi(bmi)
}
function per(e) {
 e.preventDefault();
  const CalculatePercentage=(obtMarks/totalMarks)*100;
  console.log(CalculatePercentage)
  setPercentage(CalculatePercentage)
  
}
  return (
    <>
     <h1>{count}</h1>
     <button onClick={()=>setCount(count+1)}>count</button>
      <button onClick={()=>setCount(count-1)}>count</button>
      <form onSubmit={per}>
        <input type="number" id='obtMarks' name='obtMarks' onChange={(e)=>setObtMarks(e.target.value)}/>
         <input type="number" id='totalMarks' onChange={(e)=>setTotalMarks(e.target.value)}/>
         <button>CalculatePercentage</button>
      </form>
      <div>Your percentage is {percentage}%</div>
      <form onSubmit={bmiCalculate}>
        <input type="text" onChange={(e)=>setWeight(e.target.value)}/>
         <input type="text" onChange={(e)=>setHight(e.target.value)}/>
         <button>BMI Calculator</button>
      </form>
      <div>{bmi}</div>
    </>
  )
}

export default App
