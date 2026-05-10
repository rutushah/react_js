import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {SideBarClass} from './components/SideBar'


function App() {

  const[darkMode, setDarkMode] = useState(true)

  return (
    <div className="h-screen bg-white dark:bg-blue-800 text-black dark:text-white">
      {/* <SideBarClass/> */}
      <button onClick={() => {
        // setDarkMode(!darkMode)
        document.querySelector("html").classList.toggle("dark", document.querySelector("html").classList[0] == "dark" ? false : true)
      }}> Toggle button </button>
    </div>
  )
}

export default App
