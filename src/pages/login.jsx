import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import '../css/login.css'
import axios from 'axios'

function ErrorMessage({msg}){
  return(
    <small style={{display:"block"}} className="error-msg text-danger text-start">
      {msg}
    </small>
  );
}

function Login({ setIsLoggedIn }) {

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(true);
    
    const [password, setPassword] = useState('');
    const [validLen, setValidLen] = useState(true);

    const navigate = useNavigate(); 

  const validateEmailAndSet = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const valid = emailRegex.test(email);
    setValidEmail(valid);
    if(valid){
      setEmail(email);
    }
  }

  const validatePasswordAndSet = (pwd) => {
    const valid = pwd.length >= 8;
    setValidLen(valid);
    if(valid){
      setPassword(pwd);
    }
  }
  
  async function handleSubmit(e){
    e.preventDefault();

    if(email !== '' && password !== '' && validEmail && validLen){
      const url = "https://express-t4.onrender.com/api/login"
      const data = {username: email, password: password};

      const response = await axios.post(url, data)
          .then((response) => response)
          .catch((error) => error.response);

      console.log(response);
      if(response.status === 200 && response.data.message.match("Login success!")){
        setIsLoggedIn(true);
        navigate('/profileListing');
      } else if(response.status === 401 && response.data.message.match("Incorrect Username and/or Password!")){
        alert('Incorrect Username and/or Password!');
        window.location.reload();
      }
      else {
        alert('Please try again in sometime');
        window.location.reload();
      }
    } else{
      setValidEmail(false);
      setValidLen(false);
    }
  }

  return (
    <div className='login-page'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6'>
                <div className='card login-form'>
                    <h3 className='card-title'>Log In</h3>
                    <form>
                        <div className="form-group m-3 px-5">
                          <input type="text" className="form-control" id="emailInput" placeholder="Email" onInput={(e) => validateEmailAndSet(e.target.value)}/>
                            { !validEmail? <ErrorMessage msg="Please enter a valid email" />: null }
                        </div>
                        <div className="form-group m-3 px-5">
                          <input type="password" className="form-control" id="passwordInput" placeholder="Password" onInput={(e) => validatePasswordAndSet(e.target.value)} />
                            {
                                !validLen? <ErrorMessage msg="Minimum 8 characters" /> : null
                            }
                        </div>
                    </form>
                    <div className='text-center mb-3'>
                    <button className='btn btn-primary' onClick={(e) => handleSubmit(e)} >Submit</button>
                  </div>
                </div>
            </div>
          </div>
        </div>
  </div>
  );
}

export default Login;