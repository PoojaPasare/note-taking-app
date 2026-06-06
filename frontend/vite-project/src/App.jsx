import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Createnote from './pages/Createnote'

const App = () => {
  return (
    // <div className='flex justify-center items-center min-h-screen bg-gray-900 text-white'>
      <div className="min-h-screen flex flex-col bg-gray-900 text-white">
    <Navbar/>

    {/* main content */}
<main className='flex-1 container mx-auto p-4'>
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Createnote />}/>
         
      </Routes>

</main>
    <Footer/>
    </div>
  )
}

export default App
