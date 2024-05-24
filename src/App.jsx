import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Manager from './Components/Manager'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-[#2f3247] bg-[radial-gradient(#ffffff_1px,#000000_1px)] bg-[size:60px_60px] ">
      <Manager/>
      </div>
      <Footer/>
    </>
  )
}

export default App
