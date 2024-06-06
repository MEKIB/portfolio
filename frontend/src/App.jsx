import React from 'react'
import  {Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Contact from './components/contact/contact'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  )
}
export default App
