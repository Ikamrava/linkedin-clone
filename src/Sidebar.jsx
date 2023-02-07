
import Avatar from 'react-avatar';
import React from 'react'
import avatar from "./images/ik.png"
import background from "./images/back.jpg"

function Sidebar() {

    const RecentItem = (topic) =>(
        <div className=' pb-2 rounded-xl '>
            <p className='pl-3 text-gray-600 hover:text-black hover:bg-slate-100'><span># </span>{topic}</p>
        </div>
        )

  return (
    <div className=' max-w-6xl md:block flex-col mt-2 flex-[0.3] items-start   '>
        
        <div className=' flex flex-col items-center w-full pt-0 justify-start bg-white pb-3 rounded-t-lg  '>
            <img className='  h-16 w-[100%] object-cover mb-[-15px] mt-0 rounded-t-lg' src={background} alt="" />
            <Avatar className=' ' src={avatar} size="35" round={true}/>
            <p className=' text-xl font-bold'>Iman</p>
            <p className=' text-gray-600'>iman.kamrava@gmail.com</p>
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