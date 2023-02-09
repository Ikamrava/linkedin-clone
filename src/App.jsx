
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
  const user = useSelector((state) => state.user.user);
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
    
    <div className="  max-w-6xl mx-auto px-4 ">
      
     {user ? 
     <>
        <Header  />
        <div className=" md:flex flex-row gap-4 mt-10">
          <Feed/>
          <Sidebar className="sticky top-1 " />
        </div>
       </>:
     <>
      <Login/>
     </> 
       
       
      }
      
  
    </div>
  );
}

export default App;
