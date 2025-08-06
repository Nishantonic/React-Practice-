import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const value = useRef(null);

  const handleRef = () =>{
    value.current.focus();
  }
  return (
   <>
   <div>Nishant Banger <span>{count}</span></div>
    <input type="text" placeholder='Search item' ref={value} />
   <button onClick={handleRef} >Increase</button>
   </>
  )
}

export default App
