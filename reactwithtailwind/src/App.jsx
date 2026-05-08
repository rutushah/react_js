import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Button} from './components/button'
import { Input } from './components/Input'
import {OTP} from './components/OTP'

function App() {


  return (
    <>

     {/* <div className='flex justify-between grid grid-cols-3 sm:grid-cols-12'>
      <div className='md:bg-blue-300 sm:bg-purple-300 bg-yellow-400 sm:col-span-4 col-span-4 text-5xl'>Child 1</div>
      <div className='md:bg-red-300 sm:bg-purple-300 bg-yellow-400 sm:col-span-6 col-span-4'> Child 2</div>
      <div className='md:bg-green-300 sm:bg-purple-300 bg-yellow-400 sm:col-span-2 col-span-4'>Child 3</div>
     </div> */}


     <div className="bg-sky-950 min-h-screen">
    
          <Input type="text" placeholder="User Name"></Input>
          <br />
          <br /><br />
          
          <br />
          <br /><br />
          <OTP />
          <Button disabled={false}> Continue </Button>
        </div>

      

     
    </>
  )
}

export default App
