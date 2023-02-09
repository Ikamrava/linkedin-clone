
import Avatar from 'react-avatar';
import React from 'react'
import background from "./images/back.jpg"
import { useSelector } from 'react-redux';

function Sidebar() {

   const user = useSelector((state) => state.user.user);
   let photo = ""
   if(user.photoURL){
    photo = user.photoURL
   }else{
    photo = "/"
   }

    const RecentItem = (topic) =>(
        <div className=' pb-2 rounded-xl '>
            <p className='pl-3 text-gray-600 hover:text-black hover:bg-slate-100'><span># </span>{topic}</p>
        </div>
        )

  return (
    <div className= ' max-w-6xl md:block flex-col flex-[0.25] items-start mt-4 md:mt-0 '>
        <div className=' flex flex-col items-center w-full pt-0 justify-start bg-white pb-3 rounded-t-lg  '>
            <img className='  h-16 w-[100%] object-cover mb-[-15px] mt-0 rounded-t-lg' src={background} alt="" />
            <Avatar className=' ' src={photo} size="35" round={true} name={user.displayName} />
            <p className=' text-xl font-bold capitalize'>{user.displayName}</p>
            <p className=' text-gray-600'>{user.email}</p>
        </div>
    
        <div className=' flex flex-col px-4 mt-1 mb-2 bg-white pb-3 pt-2 rounded-b-lg w-full'>
            <div className=' flex justify-between'>
                <p className=' text-gray-600 '>Who viewd you</p>
                <p className=' text-blue-600 font-bold'>254</p>
            </div>
               <div className=' flex justify-between'>
                <p className=' text-gray-600'>View on ost</p>
                <p className=' text-blue-600 font-bold'>254</p>
            </div>
        </div>
          <div className='rounded-lg bg-white w-full cursor-pointer'>
         <p className=' text-left w-full py-2  pl-4  '>Recent</p>
         {RecentItem("reactJS")}
         {RecentItem("programming")}
         {RecentItem("software")}
         {RecentItem("design")}
         {RecentItem("developer")}
          </div>

    </div>
  )
}

export default Sidebar