import { useState } from 'react';
import { auth } from '../firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();
    console.log(auth?.currentUser?.email)
    const handleLogin = async() => {
        try{
            const response = await signInWithEmailAndPassword(auth, email, password);
            const authToken = response._tokenResponse.refreshToken;
            localStorage.setItem('token', authToken)
            navigate('/home')
        }catch(error){
            if(error.code === 'auth/wrong-password'){
                toast.error('Please check the Password');
              }
              if(error.code === 'auth/user-not-found'){
                toast.error('Please check the Email');
              }
        }
    }
    return (
        <>
            <label htmlFor="email" style={{ marginRight: '10px', display: 'flex', flexDirection: 'column' }}>Email</label>
            <input type="email" name="email" style={{ padding: '.5rem' }} placeholder='enter your email....'
                onChange={(e) => setEmail(e.target.value)} />
            <br />
            <label htmlFor="email" style={{ marginRight: '10px' }}>Password</label>
            <input type="password" name="email" style={{ padding: '.5rem' }} placeholder='enter your email....'
                onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button style={{ padding: '.5rem' }} onClick={handleLogin}>Login</button>
            <ToastContainer />
        </>
    )
}

export default Login