import './register.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handelSubmit = async (e) => {
        e.preventDefault();
        {
            
        }
        
    }
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handelSubmit}>
                <label >Username</label>
                <input type="text" className="registerInput" placeholder="Enter your username..." onChange={e => setUsername(e.target.value)} minLength={5} required/>
                <label >Email</label>
                <input type="email" className="registerInput" placeholder="Enter your email..." onChange={e => setEmail(e.target.value)} required/>
                <label >Password</label>
                <input type="password" className="registerInput" placeholder="Enter your password..." onChange={e => setPassword(e.target.value)} minLength={5} required />
                <button className="registerButton" type="submit"> Register</button>
            </form>
            <button className="registerLoginButton">
                <Link className="link" to="/login">
                    LOGIN
                </Link>
            </button>
        </div>
    )
}
