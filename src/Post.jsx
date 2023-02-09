import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar'
import InputOption from './InputOption'
import { BiLike} from 'react-icons/bi';
import { BiCommentDots} from 'react-icons/bi';
import { BsShare} from 'react-icons/bs';
import { RiSendPlaneLine} from 'react-icons/ri';
import { doc, getFirestore, updateDoc } from 'firebase/firestore';





function Post({name, description,message, photurl,isliked,id,post}) {
  //  const [post,setPost]=useState([])


  //    useEffect(()=>{

  //     async function getdata(){
  //        const q = query(collectionGroup(storage, "posts"),orderBy("timestamp", "desc"));
  //        const querySnapshot = await getDocs(q);
  //        setPost(
  //        querySnapshot.docs.map(function(doc) {
  //           return {
  //              id:doc.id,
  //              data:doc.data()
  //           }
  //         }))
  //        }
  //     getdata()
  //     },[post])

  function likeHandler(id){
     const likedone = post.filter(item=>item.id===id)
     const db = getFirestore()
     const docRef = doc(db, "posts", likedone[0].id);
     const data = {
      isliked: !isliked
     }
     updateDoc(docRef, data)
      }


  return (
    <div  >
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
        <InputOption Icon={BiLike} title={"Like"} color={isliked ? "red" : "gray"} onclick={()=>likeHandler(id)} id={id}  />
        <InputOption Icon={BiCommentDots} title={"Comment"} color={"gray"}/>
        <InputOption Icon={BsShare} title={"Share"} color={"gray"}/>
        <InputOption Icon={RiSendPlaneLine} title={"Send"} color={"gray"}/>
      </div>
    </div>
  )
}

export default Post