import {React, useEffect, useState} from 'react'
import { data, useLocation } from 'react-router-dom'
import './Login.css'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Eyeicon from '../Togglevisiblepaword/eyeicon';

function Login() {
  const[username, setusername]= useState("")
  const [password, setpassword]= useState("")
  const[error,seterror]= useState("")
  const [showpassword, setshowpassword] = useState({});

   const Navigate = useNavigate();

  const userlogin = async() =>{
   let formBody = new URLSearchParams();
   formBody.append("username", username);
   formBody.append("password", password);

    try{
      await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formBody.toString(),
      })
        .then((response) =>
          response.json().then((data) => ({
            status: response.status,
            data,
          }))
        )
        .then(({ status, data }) => {
          if (status !== 200) {
            throw new Error(
              Array.isArray(data.detail)
                ? data.detail.map((err) => err.msg)
                : data.detail
            );
          }
          localStorage.setItem("token", JSON.stringify(data.access_tocken));
          Navigate("/");
          console.log(data);
        });
      

    }catch(err){
      seterror(err.message)
      

    }



  }
   

    
  return (
    <div className="login-page">
      <div className="container">
        <div className="err">
          <p style={{ color: "red", fontSize: "20px" }}>{error}</p>
        </div>
        <p>Log in</p>
        <input
          type="text"
          className="email"
          placeholder="username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          type={showpassword.password ? "text" : "password"}
          className="password"
          placeholder="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <Eyeicon
          id="password"
          showeye={showpassword}
          setshoweye={setshowpassword}
          className="login"
        />
        <button className="submit-button" onClick={userlogin}>
          Submit
        </button>
        <div className="text">
          Does not have an account?<NavLink to="/signup">Sign up</NavLink>
        </div>
        <div className="text">
          <NavLink to="/forgotpassword">forgot password?</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login
