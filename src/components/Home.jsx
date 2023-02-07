import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/auth';
import { signOut } from 'firebase/auth';

const Home = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        const authToken = localStorage.getItem("token")
        if(authToken){
            navigate('/home')
        }else{
            navigate('/login')
        }
    },[])
    const name = 'pawan'
    const handleLogut = async () => {
        try {
            await signOut(auth);
            navigate('/login');
            localStorage.removeItem("token");
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <>
            <button onClick={handleLogut}>Logout</button>
            <h3>Welcome to {name} authentication page</h3>
        </>
    )
}

export default Home