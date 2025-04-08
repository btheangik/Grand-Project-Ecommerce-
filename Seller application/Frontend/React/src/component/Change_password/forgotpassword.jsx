import React, { useState } from 'react'
import './forgotpassword.css'
import { data } from 'react-router-dom'


function Forgotpassword() {
    const[username, setusername]= useState('')
    const[err,seterr]=useState("")
   

    const tokengenerate = async(e) =>{
       e.preventDefault();
      let payload={
        email: username
      }
      try {
        const response=await fetch("http://127.0.0.1:8000/user/forgotpassword", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })

        const data= await response.json()

        const result={
          status:response.status,
          data:data
        }
        if (result.status!=200) {
          throw new Error(
            Array.isArray(data.detail)?data.detail.map((err)=>err.msg):data.detail
          )
          
        }
        else{
          alert(result.data.messege)
        }
        localStorage.setItem("token",result.data.temporary_token);
        

      } catch (error) {
        console.error("Error:", error);
       seterr(error.message)
      }
     
      
    
    }

  return (
    <div className="forgotpassword">
      <div className="Email">
        <div className="err">
          <p style={{ color: "red", fontSize: "20px" }}>{err}</p>
        </div>

        <form onSubmit={tokengenerate}>
          <input
            type="text"
            placeholder="email"
            className="emailbox"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            required
          />
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
  
}

export default Forgotpassword
