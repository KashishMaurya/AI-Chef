import { useState } from 'react'

// import './App.css'
import Header from './Components/Header'
import Input from './Components/Input'

function App() {const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Input/>
    </>
  )
}

export default App
