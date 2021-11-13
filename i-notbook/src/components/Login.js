import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

const LogIn = (props) => {
    const url = "http://localhost:5000/api/auth/login";
    let history = useHistory();
    const [credentials, setCredentials] = useState({ email : "", password : ""});
    const submit = async (e) =>{
        console.log('Submitting form...');
        e.preventDefault();
        const response = await fetch(url, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(credentials)
        })   
        const json = await response.json();
        if(json.success){
            localStorage.setItem('token', json.authToken);
            history.push("/");
            props.showAlert("Logged in successfully.", "success");
        } else {
            props.showAlert("Please enter valid credentials.", "danger");
        }
    }
    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name] : e.target.value});
    }
  return (
    <div className="container mt-3" style={{margin: '50px auto',width : '50%'}}>
      <h2>Login to continue to <i>i</i>Notebook</h2>
    <form onSubmit={submit}>
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
            minLength={5}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" >
          Log in
        </button>
      </form>
    </div>
  );
};

export default LogIn;
