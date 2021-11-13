import './register.css'

export default function Register() {
    return (
        <div className="register">
            <form className="registerForm">
                <label >Email</label>
                <input type="email" className="registerInput" />
                <label >Password</label>
                <input type="password" className="registerInput" />
                <button className="registerButton">Register</button>
            </form>
        </div>
    )
}
