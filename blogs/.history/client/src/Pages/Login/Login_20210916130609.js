import './login.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const handelSubmit(e) => {

    }
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handelSubmit}>
                <label>Username</label>
                <input type="text" className="loginInput" placeholder="Enter your username" ref={userRef} required />
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter your password" ref={passwordRef} minLength={5} required/>
                <button className="loginButton" type="submit">Login</button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register">
                    REGISTER
                </Link>
            </button>
        </div>
    )
}
