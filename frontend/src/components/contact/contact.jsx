import React, { useEffect, useState } from "react";
import axios from 'axios'
import './contact.css'
import address_icon from '../../assets/address_icon.png'
import phone_icon from '../../assets/phone_icon.png'
import email_icon from '../../assets/email.png'
import Validation from "./Validation";
import { toast } from "react-toastify";
import Notification from "./Notification";

function Contact(){
    const[values,setValues]=useState({
        name: "",
        email:"",
        message:""
    })
    const handleChange=(e)=>{
        setValues({...values,[e.target.name]:[e.target.value]})
    }
    const [errors,setErrors]=useState({})
    const handleSubmit= async(e)=>{
        e.preventDefault()
        setErrors(Validation(values))
      if(errors.name===""&&errors.email===""&&errors.message===""){
        await axios.post('http://localhost:5000/send', values);
        toast.success("the message is successfully sent")
      }
    }
    return(
        <section className="contact">
            <div className="content">
                <h1>Contact Me</h1>
                <p>Hello I am mekibib. I am full stack developer </p>
            </div>
            <div className="contact-box">
              <div className="contact-left-info">
                <div className="info">
                    <div className="box">
                        <img src={address_icon} alt="" />
                        <p>Bahir Dar</p>
                    </div>
                    <div className="box">
                        <img src={email_icon} alt="" />
                        <p><a href="mailto:mekibibatlaw219@gmail.com" title="mail me">mekibibatlaw219@gmail.com</a></p>
                        {/* <p>mekibibatlaw219@gmail.com</p> */}
                    </div>
                    <div className="box">
                        <img src={phone_icon} alt="" />
                        <p><a href="tel:+0977507901" title="contact me">0977507901</a></p>
                        {/* <p>0977507901</p> */}
                    </div>
                </div>
              </div>
              <div className="contact-right-info">
                <h3>send message</h3>
                <form action="" onSubmit={handleSubmit}>
                   <span style={{color:'red'}}>{errors.name}</span>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" placeholder="enter your name" 
                        onChange={handleChange}/>
                    </div>
                    <span style={{color:'red'}}>{errors.email}</span>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email"  id="" placeholder="enter your email"
                        onChange={handleChange}/>
                    </div> 
                    <span style={{color:'red'}}>{errors.message}</span> 
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message"  id="message" placeholder="enter your message here"
                        onChange={handleChange}></textarea>
                    </div>           
                  <input type="submit" value="submit"  id="submit"/>
                </form>
                <Notification/>
              </div>
            </div>
        </section>
    )
}
export default Contact