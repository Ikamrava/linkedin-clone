import React from 'react'
import logo from "./images/Linkedintext.png"

function Login() {
  return (
    <div className='  max-w-sm mx-auto mt-10'>
        <img className=" w-40 mx-auto" src={logo} alt="" />
        <form>
            <input type="text" />
        </form>
    </div>
  )
}

export default Login