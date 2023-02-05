
import { BiSearch } from 'react-icons/bi';
import logo from "./images/linkedin.png"

function Header() {
  return (
    <div>
      <header className=' fixed top-0 items-center mt-3  '>


        <div className='flex gap-4   items-center '>

          <img className=' object-contain w-10' src={logo} alt="" />

          <div className='flex  gap-2 relative'>
            <BiSearch size={20} className=" absolute left-2 top-2.5"/>
            <input className='  rounded-md h-10 px-8 text-gray-900 bg-[#eef3f8] focus:w-96 ease-in duration-300 ' type="text" placeholder='Search' ></input>
          </div>

        </div>



        <div>
            
        </div>


      </header>
    </div>
  );
}

export default Header;
