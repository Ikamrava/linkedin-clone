
import { BiSearch } from 'react-icons/bi';
import { AiTwotoneHome } from 'react-icons/ai';
import { BsPeopleFill } from 'react-icons/bs';
import { MdWork} from 'react-icons/md';
import { RiMessage2Fill} from 'react-icons/ri';
import { RiNotification2Fill} from 'react-icons/ri';
import HeaderOption from './HeaderOption';
import logo from "./images/linkedin.png"
import UserLogo from './UserLogo';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './app/store';
import { auth } from './firebase';

function Header() {
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch()
   function logoutHandler(){
     dispatch(logout())
     auth.signOut()
   } 

  return (
    <div className='mx-auto max-w-6xl py-2 shadow-lg bg-white'>
      <header className='  items-center mt-3 ml-2 flex w-full     '>


        <div className='flex gap-4 items-center  '>
     
          <img className=' object-contain w-10' src={logo} alt="" />

          <div className=' relative flex flex-col justify-end items-center'>

            <BiSearch size={20} className=" lg:absolute lg:top-2.5 lg:left-2 text-sm text-gray-600 "/>
            <h3 className='hidden sm:block lg:hidden text-sm text-gray-600'>Search</h3>
            <input className='  rounded-md h-10 px-8 text-gray-900 bg-[#eef3f8] hidden lg:block' type="text" placeholder='Search' ></input>

          </div>

        </div>



        <div className=' flex justify-evenly flex-1 w-full '>
            <HeaderOption title="Home" Icon={AiTwotoneHome}/>
            <HeaderOption title="My Network" Icon={BsPeopleFill}/>
            <HeaderOption title="Jobs" Icon={MdWork}/>
            <HeaderOption title="Messaging" Icon={RiMessage2Fill}/>
            <HeaderOption title="Notification" Icon={RiNotification2Fill}/>
            {user.email && <UserLogo userName={user.displayName} link={user.photoURL} onclick={logoutHandler}/>}
            <HeaderOption title="Work" Icon={BsPeopleFill}/>
        </div>


      </header>
    </div>
  );
}

export default Header;
