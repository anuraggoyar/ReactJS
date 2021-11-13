import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignUp = (props) => {
    const history = useHistory();
    const [credentials, setCredentials] = useState({name : "", email : "", password : "", cpassword: ""});
    const onChange = (e) =>{
        setCredentials({...credentials, [e.target.name] : e.target.value});
    }
    const submit = async (e) => {
        e.preventDefault();
        const url = 'http://localhost:5000/api/auth/createuser';
        const {name, email, password, cpassword} = credentials;
        if(password === cpassword){
            const response = await fetch(url, {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({name,email,password})
            })
            const json = await response.json();
            console.log('Response from create user : ' ,json);
            if (json.success) {
                setCredentials({ name: "", email: "", password: "", cpassword: "" });
                localStorage.setItem('token', json.authToken);
                history.push("/");
                props.showAlert("Created Account Successfully.", "success");
            } else {
                props.showAlert(json.error, "danger");
            }
        } else {
            props.showAlert('Password did not match.', "danger");
        }
    }
    return ( 
        <div className="container my-3" style={{ width: '50%' }}>
            <h2>Signup to use <i>i</i>Notebook</h2>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={credentials.name}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={credentials.email}
                        onChange={onChange}
                        aria-describedby="emailHelp"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={credentials.password}
                        onChange={onChange}
                        required
                        minLength={5}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password1" className="form-label">
                        Confrim Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="cpassword"
                        name="cpassword"
                        value={credentials.cpassword}
                        onChange={onChange}
                        required
                        minLength={5}
                    />
                </div>
                <button type="submit" className="btn btn-primary" >
                    Sign up
                </button>
            </form>
        </div>
     );
}
 
export default SignUp;