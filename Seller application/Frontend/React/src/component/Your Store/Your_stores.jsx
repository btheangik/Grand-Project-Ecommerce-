import React from "react";
import Container from "../Container/Container"
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function Your_stores() {
  const location=useLocation()
  console.log(location);
 
  
  return (
    <Container parentComponent='Your_stores'>
     storesfgg
    </Container>
  )
}

export default Your_stores;
