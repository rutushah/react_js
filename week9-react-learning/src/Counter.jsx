import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function CounterApp() {

  let [CounterVisible, setVisible] = useState(true);

  useEffect(function(){
    setInterval(function(){
      setVisible(c => !c)
    },5000);
    },[])

  return (
    <div>
      
        Hi there
     
      <div style={{visibility:CounterVisible ? "hidden" : "visible"}}> <Counter>  </Counter> </div>
      
      </div>
  )
}

function Counter(){

  //converting the count variable to a state variable using the useState hook
  const [count, setCount] = useState(0)

  //to increase the count, every one second, we can use the setInterval function to call the increaseCount function every 1000 milliseconds (1 second)
  useEffect( function () {
    console.log("useEffect called")
    let clock = setInterval(function(){
      console.log("setInterval called")
      setCount(function(currentValue){
        return currentValue + 1;
      })
    },1000);
    //logic for unmounting
    return function () {
      clearInterval(clock);
      console.log("clock cleared")
    }

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


