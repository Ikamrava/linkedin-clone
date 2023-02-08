import React from 'react'
import Avatar from 'react-avatar'

function UserLogo({userName,link,onclick}) {
  return (
    <div className=' flex flex-col justify-center items-center cursor-pointer group'>
        <Avatar src={link} size={25} round={true} name={userName} onClick={onclick} />
        <p className='hidden md:block text-sm text-gray-600 group-hover:text-black'>{userName}</p>
    </div>
  )
}

export default UserLogo