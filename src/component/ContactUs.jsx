import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export const ContactUs = () => {
  const [Error , setError] = useState("")
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ntwa3hm', 'template_s5e38al', form.current, 'hqN4IKlXsBcCvjboM')
      .then((result) => {
        console.log(result);
      }, (error) => {
          setError(error.text);
      });
  };

  return (
    <form style={{textAlign:"center" , margin:"50px 0"}} ref={form} onSubmit={sendEmail}>
     <h1 style={{fontSize:"2.5rem"}}>GET IN TOUCH </h1>
        <hr style={{width:"150px", borderColor:"rgb(255 47 115 / 100%)" , borderWidth:"5px 0px 0px " }}></hr>
      <div style={{marginTop:"35px"}}>
      <input style={{padding:"15px" ,fontSize:"1rem" , margin:"0 7.5px"}} required={true} type="text" name="user_name" placeholder='Full Name'/>
      <input style={{padding:"15px" ,fontSize:"1rem" , margin:"0 7.5px"}} required={true} type="email" name="user_email"  placeholder='Email' />
      </div>
      <div style={{margin:"20px"}}>
      <textarea  style={{padding:"15px" ,fontSize:"1rem"}} required={true} name="message" placeholder='Your Message'/>
      </div>
      {Error? <h5 style={{color:"red"}}>{Error}</h5>: null}
      <button type="submit" value="Send" >Send</button>
    </form>
  );
};