import React from 'react'
import { useNavigate } from "react-router";
import { useAuth } from '../context/AuthContext';

function Login() {
  let navigate = useNavigate();
  const { login } = useAuth();

  return (
    <div className="mt-5">
      login page
      <div>
        <button type="button" onClick={()=>{
          login({ name: 'test' }); 
          console.log('here ------------------------')
          navigate("/")
        }} className="btn btn-primary btn-sm mt-3">Login</button>
      </div>
    </div>
  )
}

export default Login