import React, { useState } from 'react'
import Hidden from '../../assets/Images/hidden.png'
import Show from '../../assets/Images/show.png'
import './eyeicon.css'
import Signup from '../Sign up/Signup'

function Eyeicon({id,showeye,setshoweye,className}) {
    
    
    
   
    const ShowPassword = () =>{

        setshoweye((prev)=>({
            ...prev, [id]:!prev[id]
           
            
         
        }))
        console.log(id);
        console.log(showeye);
        
        
   
     
      
        

    }
    
  return (
    <div>
      <img
        src={showeye[id] ? Show : Hidden}
        alt=""
        className={className }
        onClick={ShowPassword}
      />
    </div>
  );
}

export default Eyeicon
