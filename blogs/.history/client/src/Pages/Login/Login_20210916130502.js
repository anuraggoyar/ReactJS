import './login.css';
import { Link } from 'react-router-dom';
export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handelSubmit}>
                <label>Username</label>
                <input type="text" className="loginInput" placeholder="Enter your username" />
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter your password" minLength={5} required/>
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
