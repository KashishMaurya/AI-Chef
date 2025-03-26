import { useState } from 'react'

// import './App.css'
import Header from './Components/Header'
import Input from './Components/Input'
import Footer from './Components/Footer'

function App() {const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Input />
      <Footer />
    </>
  )
}

export default App
