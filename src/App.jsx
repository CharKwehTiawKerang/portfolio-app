import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import  { Navbar, Home, Work, About, Contact } from './components'
import './App.css'
import './animation.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/work' element={<Work />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>      
    </>
  )
}

export default App
