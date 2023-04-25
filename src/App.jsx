import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import About from './pages/About'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import CreatePost from './pages/CreatePost'
import AllPosts from './pages/AllPosts'
import ImageUpload from './pages/ImageUpload'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpecificPost from './pages/SpecificPost'
import Signin from './pages/Signin'


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
        <Route path='/createpost' element={<CreatePost />} />
        <Route path='/allposts' element={<AllPosts />} />
        <Route path='/upload' element={<ImageUpload />} />
        <Route path='/signin' element={<Signin />} />
        {/* <Route exact path="/posts/:Id" component={<SpecificPost />} /> */}
        <Route path="/posts/:id" element={<SpecificPost />} />
          
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
