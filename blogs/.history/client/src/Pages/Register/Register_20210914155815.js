import './register.css'

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label >Email</label>
                <input type="email" className="registerInput" placeholder="/>
                <label >Password</label>
                <input type="password" className="registerInput" placeholder="/>
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">Login</button>
        </div>
    )
}
