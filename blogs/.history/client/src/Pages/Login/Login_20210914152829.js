import './login.css';

export default function Login() {
    return (
        <div className="login">
            <form className="loginForm">
                <label>Email</label>
                <input type="email" placeholder="Enter your email..." />
                <label>Password</label>
                <input type="password" placeholder="Enter your Password..." />
                <button className="loginSubmit">Login</button>
            </form>
            <button className="loginRegisterButton">Register</button>
        </div>
    )
}