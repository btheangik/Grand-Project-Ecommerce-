import React, { useState } from 'react'
import Eyeicon from '../Togglevisiblepaword/eyeicon';
import { data } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import Swal from 'sweetalert2';


function Newpassword() {
    const[password,setpassword]= useState('')
    const[repeartpassword,setrepeatPassword]=useState('')
    const[showpassword, setshowpassword]=useState({password:false, repeartpassword:false})
    const[err,seterr]= useState("")
    const [searchParams] = useSearchParams();
    
 
    const updatingpassword=async(e)=>{
          e.preventDefault();
          if (password!=repeartpassword) {
            seterr("password is not matched")
            
          }
          else{
            const payload={
                password:password
            }
         
          const token = searchParams.get("token");
          console.log(token);
          
           
            
            
            try{
                const response = await fetch(
                  `http://127.0.0.1:8000/user/resetpassword?token=${token}`,
                  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                  }
                );

                const data= await response.json()
                console.log(data);
                const Result={
                    status:response.status,
                    data:data
                }
                if (Result.status!=200) {
                    throw new Error(
                        Array.isArray(data.detail)?data.detail.map((err)=>err.msg):data.detail
                    )
                    
                }
                else{
                     Swal.fire({
                       icon: "success",
                       title: "Password Updated!",
                       html: `Please <a href="/login">login</a> to continue.`,
                       confirmButtonText: "OK",
                     });
                }
                

            }catch(error){
                seterr(error.message)

            }
          }

    }
  return (
    <div className="signup-page">
      <form onSubmit={updatingpassword}>
        <div className="container">
          <div className="err">
            <p style={{ color: "red", fontSize: "20px" }}>{err}</p>
          </div>
          <input
            type={showpassword.password ? "text" : "password"}
            value={password}
            className="password"
            placeholder="password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <Eyeicon
            id="password"
            showeye={showpassword}
            setshoweye={setshowpassword}
            className="newpasswordone"
          />

          <input
            type={showpassword.repeartpassword ? "text" : "password"}
            value={repeartpassword}
            className="password"
            placeholder="type the password again"
            onChange={(e) => setrepeatPassword(e.target.value)}
          />

          <Eyeicon
            id="repeartpassword"
            showeye={showpassword}
            setshoweye={setshowpassword}
            className="newpassword"
          />

          <button className="submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Newpassword
