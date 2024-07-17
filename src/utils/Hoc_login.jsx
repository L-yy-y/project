import React from 'react'
import {Navigate} from 'react-router-dom'
function Hoc_login(Com) {
  return (props)=>{
    let token=localStorage.getItem('token')
    if(token){
        return <Com {...props}/>
    }else{
        return <Navigate to="/login"/>
    }
  }
}

export default Hoc_login
