import React from 'react'
import { useState } from 'react';
import { auth } from '../firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();
    const handleSignUp = async() => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
          } catch (error) {
            console.log(error.message)
          }
    }
  return (
    <>
        <label htmlFor="email" style={{marginRight: '10px', display: 'flex', flexDirection: 'column'}}>Email</label>
        <input type="email" name="email"  style={{padding: '.5rem'}} placeholder='enter your email....'
        onChange={(e)=> setEmail(e.target.value)}/>
        <br/>
        <label htmlFor="password" style={{marginRight: '10px'}}>Password</label>
        <input type="password" name="email"  style={{padding: '.5rem'}} placeholder='enter your email....'
        onChange={(e)=> setPassword(e.target.value)}/>
        <br/>
        <label htmlFor="username" style={{marginRight: '10px'}}>Username</label>
        <input type="text" name="email"  style={{padding: '.5rem'}} placeholder='enter your email....'
        onChange={(e)=> setUsername(e.target.value)}/>
        <br/>
        <button style={{padding: '.5rem'}} onClick={handleSignUp}>SignUp</button>
    </>
  )
}

export default SignUp