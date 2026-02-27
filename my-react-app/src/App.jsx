import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  //defined state variable count and initialized to 0
  const [count, setCount] = useState(0)

  function onClickHandler() {
    //update the state variable count by incrementing it by 1
    setCount(count + 1)
  }

  return (
  
      <div> 
          <Button onClickHandler = {onClickHandler} count = {count}></Button>
      </div>
    
  )
}

function Button(props){
  return <button onClick={props.onClickHandler}>  Counter {props.count}</button>
}

export default App
