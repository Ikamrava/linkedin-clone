import { BsFillPencilFill} from 'react-icons/bs';
import InputOption from './InputOption';
import { BsImage} from 'react-icons/bs';
import { BiVideoRecording} from 'react-icons/bi';
import { MdEvent} from 'react-icons/md';
import { RiArticleLine} from 'react-icons/ri';
import Post from './Post';
import { useEffect, useState } from 'react';
import { storage  } from './firebase';
import { collection, doc, setDoc ,getDocs } from "firebase/firestore"; 
import { serverTimestamp ,collectionGroup } from "firebase/firestore"
import { query, orderBy } from "firebase/firestore";  
import { useSelector } from 'react-redux';







function Feed() {

   const [post,setPost]=useState([])
   const [inputvalue,setInputValue] = useState("")
   const user = useSelector((state) => state.user.user);

   useEffect(()=>{

      async function getdata(){

         const q = query(collectionGroup(storage, "posts"),orderBy("timestamp", "desc"));

         const querySnapshot = await getDocs(q);
   

         setPost(
         querySnapshot.docs.map(function(doc) {
            return {
               id:doc.id,
               data:doc.data()
            }
          }))
      
         }
      
      getdata()



   },[post])

   function handleChange(e){
      setInputValue(e.target.value)

   }

   async function sendPost(e){
      e.preventDefault()
      const postref = collection(storage, "posts")
       await setDoc(doc(postref), {
            name: user.displayName,
            description: "this is my second one",
            message: inputvalue ,
            photurl: false,
            timestamp: serverTimestamp()
       })

       setInputValue("")
      
   }

  return (
   <div className=' md:flex-[0.7] items-start mt-2  max-w-6xl'>
     <div className='  flex flex-col w-full bg-white pt-5 rounded-t-lg '>
        <div className='flex  w-full justify-center rounded-t-lg'>
            <div className=' relative'>
               <BsFillPencilFill className=' absolute top-3 left-3'/>
            </div>

            <form className=' w-full max-w-xl '>
               <input type="text" className=' w-full p-2 pl-10 rounded-3xl border-gray-400 border-2' onChange={handleChange} value={inputvalue} />
               <button className=' hidden' type="submit" onClick={sendPost}>Send</button>
            </form>
        </div>
     </div>

      <div className='flex justify-evenly pt-6 bg-white rounded-b-lg pb-6' >
         <InputOption Icon={BsImage} title={"Photos"} color={"blue"}/>
         <InputOption Icon={BiVideoRecording} title={"Video"} color={"red"}/>
         <InputOption Icon={MdEvent} title={"Event"} color={"gray"}/>
         <InputOption Icon={RiArticleLine} title={"Write Article"} color={"green"}/>
      </div>

      {post && post.map(item =>(
         
         <div key={item.id} className='bg-white mt-3 p-4 w-full rounded-lg'>
            <Post name={item.data.name} description={item.data.description} message={item.data.message} photurl={item.data.photurl}/>
         </div>
            
      ))}

  

      
   </div>
  )
}

export default Feed