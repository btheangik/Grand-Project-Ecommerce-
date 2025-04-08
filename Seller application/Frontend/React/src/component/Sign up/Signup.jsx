import React, { useState } from 'react'
import { data, NavLink } from 'react-router-dom';
import './Signup.css'
import { useNavigate } from "react-router-dom";
import hidden from '../../assets/Images/hidden.png'
import show from "../../assets/Images/show.png";
import Eyeicon from '../Togglevisiblepaword/eyeicon';
import Login from '../Log in/Login';


function Signup() {
  const[email, setemail]= useState('')
   const [password, setPassword] = useState('');
   const [error, seterror]= useState("")
   const [repeatPassword, setrepeatPassword]= useState("")
   //const [showpassword, setshowpassword]=useState(true)
   const [image, setImage]= useState(hidden)
   const [showpassword, setshowpassword] = useState({
     password: false,
     repeatedpassword: false,
   });
   

    const Navigate = useNavigate();
   

   const createuser = async () =>{
    if (password!=repeatPassword) {
      seterror("password did not mached")
      
    }
    else{
    let payload = {
       email: email,
       password: password,
     };
     try {
       await fetch("http://127.0.0.1:8000/user", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(payload),
       })
         .then((response) =>
           response.json().then((data) => ({
             status: response.status,
             data
            
             
           } 
           ))
         )
         .then(({ status, data }) => {
           if (status != 201) {
             throw new Error(
               Array.isArray(data.detail)
                 ? data.detail.map((err) => err.msg)
                 : data.detail
             );
           }
           console.log(data);
           seterror("");
            Navigate("/Login");
         })
         
     } catch (err) {
           
          seterror(err.message)
         
          
       
       
     }
     console.log(error);
    }
      
   }


  
   
  return (
    <div className="signup-page">
      <div className="container">
        <p>Sign up</p>
        <input
          type="text"
          value={email}
          className="email"
          placeholder="username"
          onChange={(e) => setemail(e.target.value)}
        />
        <Eyeicon
          id="password"
          showeye={showpassword}
          setshoweye={setshowpassword}
          className='signup'
        />

        <input
          type={showpassword.password ? "text" : "password"}
          value={password}
          className="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Eyeicon
          id="repeatedpassword"
          showeye={showpassword}
          setshoweye={setshowpassword}
          className='signup'
          
        />

        <input
          type={showpassword.repeatedpassword ? "text" : "password"}
          value={repeatPassword}
          className="password"
          placeholder="type the password again"
          onChange={(e) => setrepeatPassword(e.target.value)}
        />
        {/**<input type="text" className="phone-no" placeholder="phone number" />**/}
        <button className="submit-button" onClick={createuser}>
          Submit
        </button>
        {error ? (
          <div className="text">{error}</div>
        ) : (
          <div className="text">
            Already have an account?<NavLink to="/login">log in</NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Signup
