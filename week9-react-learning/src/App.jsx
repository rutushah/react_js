import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <b> 
        Hi there
      </b>
      <Counter> </Counter>
      </div>
  )
}

function Counter(){

  //converting the count variable to a state variable using the useState hook
  const [count, setCount] = useState(0)

  console.log("count: ")

  //to increase the count, every one second, we can use the setInterval function to call the increaseCount function every 1000 milliseconds (1 second)
  useEffect( function () {
    setInterval(function(){
      setCount(function(currentValue){
        return currentValue + 1;
      })
    },1000)
    console.log("useEffect called")
  },[]);



  //to increase the count, we can create a function called increaseCount that will update the count state variable by adding 1 to it. We can use the setCount function to update the count state variable.
  function increaseCount(){
    setCount(count + 1)
  }

  //to decrease the count we can create a function called decreaseCount that will update the count state variable by subtracting 1 from it. We can use the setCount function to update the count state variable.
  function decreaseCount(){
    setCount(count - 1)
  }

  // to reset the counter variable to 0 
  function resetCount(){
    setCount(0)
  }




  return (
    <div> 
      <h1 id="text"> {count} </h1>
      {/* <button onClick={increaseCount}> Increase count </button>
      <button onClick={decreaseCount}> Decrease count </button>
      <button onClick={resetCount}> Reset count </button> */}

    </div>
  )
}

export default App
