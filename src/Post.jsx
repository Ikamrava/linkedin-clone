import React from 'react'
import Avatar from 'react-avatar'
import InputOption from './InputOption'
import { BiLike} from 'react-icons/bi';
import { BiCommentDots} from 'react-icons/bi';
import { BsShare} from 'react-icons/bs';
import { RiSendPlaneLine} from 'react-icons/ri';




function Post({name, description,message, photurl}) {
  return (
    <div>
        <div className='flex gap-4 items-center'>
          <Avatar size="45" round={true} src={photurl} name= {name}/>
          <div className='flex flex-col'>
            <h2 className='m-0 p-0 font-bold capitalize'>{name}</h2>
            <p className=' m-0 p-0 text-gray-600 lowercase text-sm '>{description}</p>
          </div>
      </div>
      <div className=' mt-6 ml-3 capitalize'>
        {message && <div>{message}</div>}
      </div>
      <div className=' pt-6 flex justify-evenly'>
        <InputOption Icon={BiLike} title={"Like"} color={"gray"}/>
        <InputOption Icon={BiCommentDots} title={"Comment"} color={"gray"}/>
        <InputOption Icon={BsShare} title={"Share"} color={"gray"}/>
        <InputOption Icon={RiSendPlaneLine} title={"Send"} color={"gray"}/>
      </div>
    </div>
  )
}

export default Post