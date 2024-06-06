import React,{useState} from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import moon from '../../assets/moon.png'
import sun from '../../assets/sun.jpg'
import menu from '../../assets/menu.png'
import close from '../../assets/close.png'
import {NavLink} from 'react-router-dom'
function Navbar(){
    const[underline,setUnderline]=useState("home")
    
    const navLinkStyles=(({isActive})=>{
        return{
            // fontWeight:isActive?'bold':'normal',
            // textDecoration:isActive?'none':'none',
            // color:isActive?'magneta':'black'
        }
    })
    const menuIcon=document.getElementById("menu")
    const moonsun=document.getElementById("moon")
    // const navMenu=document.querySelector("ul")
    const menuClick=()=>{
        console.log("welcome to this mekibib program")
        // navMenu.add.classList.toggle("nav-items")
    }
    const moonchange=()=>{
        document.body.classList.toggle("theme")
        if(document.body.classList.contains("theme")){
            moonsun.src=sun
        }
        else{
            moonsun.src=moon
        }
    }
    return(
        <navbar>
            <div className="navbar">
            <img src={logo} alt="" />
            <ul id='navmenu'>
                <NavLink style={navLinkStyles} to="/">
                    <li onClick={()=>setUnderline("home")}>Home{underline==="home"?<hr/>:<></>}</li></NavLink>
                <NavLink  style={navLinkStyles}to="/about"><li onClick={()=>setUnderline("about")}>About Me {underline==="about"?<hr/>:<></>}</li></NavLink>
                <NavLink style={navLinkStyles} to="/services"><li onClick={()=>setUnderline("services")}>Services {underline==="services"?<hr/>:<></>}</li></NavLink>
                <NavLink style={navLinkStyles} to="/project"><li onClick={()=>setUnderline("project")}>Project {underline==="project"?<hr/>:<></>}</li></NavLink>
                <NavLink style={navLinkStyles} to="/contact"><li onClick={()=>setUnderline("contact")}>Contact {underline==="contact"?<hr/>:<></>}</li></NavLink>
            </ul>
            <img src={moon} alt="" className='moon' id='moon' onClick={moonchange}/>
            <img src={menu} alt="" className='menu' id="menu" onClick={menuClick}/>
        </div>
        </navbar>
        
    )
}
export default Navbar