import React from 'react'
import  {Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Contact from './components/contact/contact'
import Hero from './components/home/hero'
import About from './components/about/about'
import Services from './components/services/services'
import Project from './components/My Project/project'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element= {<Hero/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Services/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  )
}
export default App
