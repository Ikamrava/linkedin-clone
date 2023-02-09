import React, { useState } from 'react'
import logo from "./images/Linkedintext.png"
import { auth } from './firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { login } from './app/store';




function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [name,setName]=useState("")
  const [imageurl,setImageurl]=useState("")
  const dispatch = useDispatch()

 


  async function getData (){

    await createUserWithEmailAndPassword(auth, email, password)
    const user =  auth.currentUser
      console.log(user)
      await updateProfile(auth.currentUser,{
          displayName:name,
          photoURL:imageurl
         })

     

     dispatch(login({
            email:user.email,
            uid: user.uid,
            displayName:user.displayName,
            photoURL:user.photoURL,

          }))

  }


  const loginToApp = (e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((user) => {
       dispatch(login({
            email:user.email,
            uid: user.uid,
            displayName:user.displayName,
            photoURL:user.photoURL,

          }))
     })
      .catch((error) => {
         alert(error)
  });

  } 
  const register =()=>{
  
    if(!name) {
      return alert("Please enter a full name")
    }

    getData()
    
    setEmail("")
    setImageurl("")
    setPassword("")
    setName("")
  }

  return (
    <div className='  max-w-sm mx-auto mt-10 flex flex-col justify-center items-center gap-5'>
        <img className=" w-40 mx-auto" src={logo} alt="" />
        <form className='w-full mx-auto flex flex-col items-center justify-center gap-4'>
            <input type="text" className=' w-full p-2 text-center border-[#0072b1] border-2 rounded-lg' placeholder='Full Name (required)' value={name} onChange={((e)=>setName(e.target.value))} />
            <input type="text" className=' w-full p-2 text-center border-[#0072b1] border-2 rounded-lg' placeholder='Profile picture link (optional)' value={imageurl} onChange={((e)=>setImageurl(e.target.value))} />
            <input type="email" required className=' w-full p-2 text-center border-[#0072b1] border-2 rounded-lg' placeholder='Email' value={email} onChange={((e)=>setEmail(e.target.value))} />
            <input type="password" required className=' w-full p-2 text-center border-[#0072b1] border-2 rounded-lg' placeholder='Password' value={password} onChange={((e)=>setPassword(e.target.value))} />
            <button type="submit" className=' cursor-pointer text-center w-full p-2 bg-[#0072b1] text-white font-bold mx-auto rounded-lg' onClick={loginToApp}>Sign in</button>
        </form>
        <p className=' text-gray-400'>Not a member?
          <span className=' cursor-pointer hover:text-black text-gray-800' onClick={register}> Register Now</span>
        </p>
    </div>
  )
}

export default Login