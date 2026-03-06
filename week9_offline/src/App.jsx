import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div>
        <PostComponent />
      </div>
    </>
  )
}

const style = {
  width: '400px',
  backgroundColor: 'white',
  borderRadius: '10px',
  border: '1px solid gray',
  display: 'flex',
  gap: '10px',
  padding: '10px',
  color: 'black'
}

function PostComponent() {
  return (
    <div style={style}>
      <img 
        src="https://media.licdn.com/dms/image/v2/D5603AQE3Izpap56JrQ/profile-displayphoto-scale_100_100/B56ZxouBamH0Ag-/0/1771283437375?e=1774483200&v=beta&t=pndDDRoiqRrAI8ojN1MQrAwGy8wua0zNHOPb0vKKHGI"
        style={{width: '20px', height: '20px', borderRadius: '50%'}}
      />

      <div>
        <b>100xdevs</b>
        <div>23,888 followers</div>
        <div>12m</div>
        <div>
          Want to know how to win big? Check out our latest article on how to win big in the world of tech!
        </div>
      </div>
    </div>
  )
}

export default App