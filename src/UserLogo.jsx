import React from 'react'
import Avatar from 'react-avatar'

function UserLogo({userName,link}) {
  return (
    <div className=' flex flex-col justify-center items-center'>
        <Avatar src={link} size={25} round={true} name={userName} />
        <p className='hidden md:block text-sm text-gray-600 group-hover:text-black'>{userName}</p>
    </div>
  )
}

export default UserLogo