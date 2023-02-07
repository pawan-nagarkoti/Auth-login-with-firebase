import React from 'react';
import { auth, googleProvider } from '../firebase/auth';
import { signInWithPopup } from 'firebase/auth';

const Google = () => {
    console.log(auth?.currentUser?.email)

    const handleLoginIn = async() => {
        try {
            await signInWithPopup(auth, googleProvider)
          } catch (error) {
            console.log(error.message)
          }
    }
  return (
    <button style={{padding: '.5rem'}} onClick={handleLoginIn}>Login With google Account</button>
  )
}

export default Google