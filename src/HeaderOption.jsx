
import React from 'react'


function HeaderOption({title,Icon}) {
  return (
    <div className=' flex flex-col items-center group'>
      {Icon && <Icon className=" text-gray-600 object-contain cursor-pointer group-hover:text-black" size={24} />}
      <h4 className=' hidden md:block text-sm text-gray-600 group-hover:text-black'>{title}</h4>
    </div>
  )
}

export default HeaderOption
