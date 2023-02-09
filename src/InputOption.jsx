import React from 'react'

function InputOption({Icon,title,color}) {
  return (
    <div className='flex gap-2 items-center group'>
        <Icon style={{color : color}} size={25} className=" cursor-pointer"/>
        <h4 className=' font-bold text-gray-600 group-hover:cursor-pointer '>{title}</h4>
    </div>
  )
}

export default InputOption