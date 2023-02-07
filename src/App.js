import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Navigation from './components/Navigation';
import { Route, Routes } from "react-router-dom"
import Google from './components/Google';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Navigation/>
      <div style={{margin: '5rem'}}>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/google" element={<Google />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
