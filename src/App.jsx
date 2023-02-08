
import "./App.css";

import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

function App() {
  const username = useSelector((state) => state.user.user);
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
