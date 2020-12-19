import React, {useState, useEffect} from 'react';
import RegisterCss from './Register.module.css'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { FormHelperText} from '@material-ui/core';
import {
  Redirect
} from "react-router-dom";

function RegisterContainer() {
  /**
  * @param values setting states for input values 
  * @param errors setting states for errors 
  * @param serverError setting states for errors with response from server (check if  username repeated)  
   */
  const[values,setValues] = useState({username:"", firstname:"", lastname:"", email:"",password:""})
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState({});

  /**
   *used for toggle routes (back to login page)
  * @param isSubmitting tracks whether sign up button is clicked
  * @param isSubmitted checks whether no error and signup btn is clicked before updating database 
   */
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  /**validating login*/
  const validateLogin=(values)=>{
    let errors = {};
    if(!values.username){
      errors.username = "username is required"
    }

    if(!values.firstname){
      errors.firstname = "firstname is required"
    }

    if(!values.lastname){
      errors.lastname = "lastname is required"
    }
    if (!values.email) {
      errors.email = "Email is required";

    // eslint-disable-next-line 
    } else if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)) {
      errors.email = "Email address is invalid";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password needs to be more than 8 characters";
    }
    return errors;
  }


  //handling changes
  const handleChange=(event)=>{
    setIsSubmitted(false)
    const{name,value}=event.target;
    setValues({
      ...values,//make shallow copies of current states in object
      [name]:value //replacing current values with newly changed values 
    })
  }

  //handling submit
  const handleSubmit=async e=>{
    e.preventDefault();
    setIsSubmitting(true);
    setServerError({})
    const {username, firstname, lastname, email,password} =values;
    const body = {username, firstname, lastname, email, password};
    // const url = "http://localhost:4000/register";
      const url = `${process.env.REACT_APP_API_SERVER}/register`;
      async function postRegister(){
        try{
          const response = await fetch(url,{
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(body)
          });
         const result = await response.json();
         console.log(result.userNameRepeated);
        if(result.userNameRepeated === true){
          // console.log(result.userNameRepeated)
           setServerError({username: 'username is already taken, please choose a new one.'})
          }else{
           setServerError({username: ''})
        }
        console.log(values)
      }catch(e){
        console.error(e.message);
      }
    }
    postRegister();
    setErrors(validateLogin(values));
      // console.log(isSubmitted)
      // console.log(serverError);
      // console.log(Object.keys(errors).length);
      
    }
    
    
    //if there are no errors, go ahead to submit
    useEffect(() => {
      if (Object.keys(errors).length === 0&& Object.keys(serverError).length === 0&&isSubmitting) {
        setIsSubmitted(true); 
      }
      // console.log(isSubmitted)
      // console.log(serverError);
      // console.log(errors, serverError)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errors, serverError]);
    


    return (
    <>
    {
      (isSubmitted)?
      <Redirect to="/login"/>
      :
        <Grid 
        container
        direction="column"
        justify="center"
        alignItems="center"
        >
        <h1 className={RegisterCss.registerH1Container}>Register in Creact!</h1>
        <form onSubmit={handleSubmit} 
        noValidate>
        <Grid 
        container
        direction="column"
        justify="center"
        alignItems="center"
        >
            <TextField 
            placeholder="Enter your user name" 
            name="username"
            type="text"
            value={values.username}
            onChange={handleChange}/>
            {errors.username? <FormHelperText>{errors.username}</FormHelperText>:""}
            {serverError.username? <FormHelperText>{serverError.username}</FormHelperText>:""}

            <TextField 
            placeholder="firstname" 
            name="firstname"
            type="text"
            value={values.firstname}
            onChange={handleChange}/>
            {errors.firstname? <FormHelperText>{errors.firstname}</FormHelperText>:""}

            <TextField 
            placeholder="lastname" 
            name="lastname"
            type="text"
            value={values.lastname}
            onChange={handleChange}/>
            {errors.lastname? <FormHelperText>{errors.lastname}</FormHelperText>:""}

            <TextField 
            placeholder="email" 
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}/>
            {errors.email ? <FormHelperText>{errors.email}</FormHelperText>:""}
            

            <TextField 
            placeholder="password" 
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}/>
            {errors.password ? <FormHelperText>{errors.password}</FormHelperText>:""}

            <Button 
            variant="outlined"
            type="submit"
            onClick={()=>setIsSubmitted(false)}
            >
              Sign up
            </Button>

        </Grid>
        </form>   
        </Grid>
      
    }
    </>
  )
}

export default RegisterContainer