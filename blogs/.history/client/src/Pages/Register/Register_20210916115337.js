import './register.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChange = (e) => {

    }
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label >Username</label>
                <input type="text" className="registerInput" placeholder="Enter your username..." onChange={e => e.target.value}/>
                <label >Email</label>
                <input type="email" className="registerInput" placeholder="Enter your email..." />
                <label >Password</label>
                <input type="password" className="registerInput" placeholder="Enter your password..."/>
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">
                <Link className="link" to="/login">
                    LOGIN
                </Link>
            </button>
        </div>
    )
}
