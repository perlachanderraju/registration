import React, { useState } from 'react';
import './App.css'

const FormValidationExample = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    mobileNumber: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData, [name] : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}
    if(!formData.username.trim()) {
        validationErrors.username = "Full name is required"
    }

    if(!formData.email.trim()) {
        validationErrors.email = "Email is required"
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
        validationErrors.email = "Email is not valid"
    }

    if(!formData.password.trim()) {
        validationErrors.password = "Password is required"
    } else if(formData.password.length < 6){
        validationErrors.password = "Password should be at least 6 char"
    }

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
        alert("Form Submitted successfully")
        localStorage.setItem("formdata",JSON.stringify(formData))
    }

  }

  return (
    <>
      <h1 className='heading'>Create your Naukri profile</h1>
      <form onSubmit={handleSubmit} className='formel'>
        <div>
          <label>Full name*</label>
          <input
            type="text"
            name="username"
            placeholder='username'  
            autoComplete='off'  
            onChange={handleChange}   
          />
            {errors.username && <span>{errors.username}</span>}  
        </div>
        <div>
          <label>Email ID*</label>
          <input
            type="email"
            name="email"
            placeholder='example@gmail.com'
            autoComplete='off'
            onChange={handleChange} 
          />
            {errors.email && <span>{errors.email}</span>}  
        </div>
        <div>
          <label>Password*</label>
          <input
            type="password"
            name="password"
            placeholder='******'
            onChange={handleChange} 
          />
            {errors.password && <span>{errors.password}</span>}  
        </div>
        <div>
          <label>Mobile number*</label>
          <input
            type="text"
            name="mobileNumber"
            onChange={handleChange} 
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default FormValidationExample;