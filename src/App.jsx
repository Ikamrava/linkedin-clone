import { useSelector } from "react-redux";
import "./App.css";
import { selectUser } from "./features/counter/userSlice";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="  max-w-6xl mx-auto  ">
      <Header  />
      {!user ? <Login/> : 
      <div className=" flex flex-col md:flex-row gap-2 ">
      <Feed/>
      <Sidebar />
      </div>
      }
      
    </div>
  );
}

export default App;
