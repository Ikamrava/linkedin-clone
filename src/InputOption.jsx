

function InputOption({Icon,title,color,onclick,id}) {
  
        
  return (
    <div className='flex items-center group gap-2' onClick={onclick} id={id}  >
        <Icon className=" text-xl md:text-2xl cursor-pointer" style={{color : color}}  />
        <h4 className=' font-bold text-gray-600 group-hover:cursor-pointer md:text-sm text-xs '>{title}</h4>
    </div>
  )
}

export default InputOption