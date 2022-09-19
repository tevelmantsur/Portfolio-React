import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { Box, Container, Grid, TextareaAutosize, TextField, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

export const ContactUs = () => {
  const [Error , setError] = useState("")
  const [Work , setWork] = useState("")

  const form = useRef();

  const sendEmail = (e) => {
    console.log(form);
    e.preventDefault();

    emailjs.sendForm('service_ntwa3hm', 'template_s5e38al', form.current, 'hqN4IKlXsBcCvjboM')
      .then((result) => {
        setWork(result)
        form.current.reset()
        console.log(result);
      }, (error) => {
          setError(error.text);
      });
  };

  return (
    <form style={{textAlign:"center" , margin:"50px 0"}} ref={form} onSubmit={sendEmail}>
   <Typography variant='h4'>GET IN TOUCH</Typography>
        <hr style={{width:"150px", borderColor:"rgb(255 47 115 / 100%)" , borderWidth:"5px 0px 0px " }}></hr>
      <Container maxWidth={'sm'}>
      <Grid spacing={2} justifyContent='center' container style={{marginTop:"35px"}}>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <TextField style={{width:"100%",  backgroundColor:"white"}} required={true} type="text" name="user_name"  variant='filled' label="Name"/>
        </Grid>
        <Grid item  xl={6} lg={6} md={6} sm={12} xs={12}>
        <TextField  style={{width:"100%",  backgroundColor:"white"}} required={true} type="email" name="user_email"  variant='filled' label="Email"/>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
        <TextField   multiline  minRows={4}  style={{ width:"100%",  backgroundColor:"white" }} required={true} variant='filled' name="message" label={ "Your Message"}/>
        </Grid>
        <Grid  item xl={12} lg={12} md={12} sm={12} xs={12}>
        <button type="submit" value="Send" >Send</button>

        </Grid>
      </Grid>
     
      {Error? <Alert style={{justifyContent:"center" , marginTop:"20px"}}  severity="warning">{Error}</Alert>: null}
      {Work ?  <Alert style={{justifyContent:"center",marginTop:"20px"}} severity="success">Thanks for the message, I will get back to you as soon as possible </Alert> : null}
      </Container>
     
    </form>
  );
};