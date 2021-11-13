import './login.css';
import { Link } from 'react-router-dom';
export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Username</label>
                <input type="username" className="loginInput" placeholder="Enter your username" />
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter your password" />
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register">
                    REGISTER
                </Link>
            </button>
        </div>
    )
}
