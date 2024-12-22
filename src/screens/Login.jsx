import React from 'react'
import { useNavigate } from "react-router";

function Login() {
  let navigate = useNavigate();

  return (
    <div className="mt-5">
      login page
      <div>
        <button type="button" onClick={()=>navigate("/")} className="btn btn-primary btn-sm mt-3">Login</button>
      </div>
    </div>
  )
}

export default Login