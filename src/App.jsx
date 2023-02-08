
import "./App.css";

import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login, logout } from "./app/store";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const username = useSelector((state) => state.user.user);
  const dispatch = useDispatch()

  useEffect(()=>{
     onAuthStateChanged(auth,(user) =>{

      if (user){
          dispatch(login({
            email:user.email,
            uid: user.uid,
            displayName:user.displayName,
            photoURL:user.photoURL,

          }))
      }else{
         dispatch(logout())
      }
     })
  },[dispatch])

  return (
    <div className="  max-w-6xl mx-auto  ">
      <Header  />
     {!username ?  <Login/>  : 
      <div className=" flex flex-col md:flex-row gap-2 ">
      <Feed/>
      <Sidebar />
      </div>
      }
      
  
    </div>
  );
}

export default App;
