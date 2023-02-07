import React from 'react'

function InputOption({Icon,title,color}) {
  return (
    <div className='flex gap-2 items-center'>
        <Icon style={{color : color}} size={25}/>
        <h4 className=' font-bold text-gray-600 cursor-pointer'>{title}</h4>
    </div>
  )
}

export default InputOption