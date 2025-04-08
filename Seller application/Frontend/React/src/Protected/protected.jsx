import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Layout from '../Layout/Layout'

function Protected() {
    const token=localStorage.getItem("token") 
  return token?<Layout/>:<Navigate to={'Login'}/>
  
}

export default Protected
