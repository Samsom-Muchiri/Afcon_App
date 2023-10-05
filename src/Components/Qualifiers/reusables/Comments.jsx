import axios from "axios"
import CommentCard from "../../CommentCard"
import { useEffect, useState } from "react"
// import { toast } from "react-toastify"

const Comments = ({handleClose3}) => {
  const URL='http://localhost:3000/comments'
  const [comments, setComments] = useState()
  const [typedComment, setTypedComment] = useState()

  useEffect(()=>{
    axios.get(`${URL}`)
    .then(response=>{
      setComments(response.data)
    })
  },[])

  const handleDelete=(e,ID)=>{
    e.preventDefault()

    axios.delete(`${URL}/${ID}`)
    .then(response=>{
      alert("deleted successfully!")

      const remainingComments=comments.filter(each=>{
        return each.id!==ID
      })
      setComments(remainingComments)

    })
    .catch(error=>{
      alert("Delete failed!!")
    })
  }

  const submitComment=(e)=>{
    e.preventDefault()

    const SUBMITTED_COMMENT={
      content:typedComment,
      // user_id let the currently loggged in user be in the context or localStorage
      user_id:2
    }
    axios.post(`${URL}`,SUBMITTED_COMMENT)
    .then(response=>{
      alert("Posted successfully!")
      const newComments=[...comments,SUBMITTED_COMMENT]
      setComments(newComments)
    })
  }
  return (
    <div className="font-poppins relative">
        <div>
            <header className="bg-bgcolor h-[5rem] flex items-center text-black text-2xl pl-8">Comments</header>
        </div>
        <div onClick={handleClose3} className='absolute w-11 h-5 top-2 right-4 rounded-full text-chocolate hover:text-hover cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
        </div>

        <div className="h-[30rem] bg-bgcolor overflow-y-scroll pt-2">
         {
          comments?
          <div className="w-[98%] mx-auto">
            {
              comments.map((eachComment,index)=>{
                return <CommentCard key={index} eachComment={eachComment} handleDelete={handleDelete}/>
              })
            }
          {/* <CommentCard /> */}

          </div>: <h1>loading...</h1>
         }
          

        </div>

        <form onSubmit={submitComment} className='flex items-center justify-between px-5 mt-2'>
          <div className="h-[2.3rem] w-[2.3rem] rounded-full bg-black">tr</div>
          <textarea value={typedComment} onChange={e=>setTypedComment(e.target.value)} className='bg-blue-300 text-sm outline-none rows="2" w-[80%] mx-4 rounded-lg pl-4 p-1' ></textarea>
          <button type="submit" className='bg-blue-500 hover:bg-blue-600 py-2 px-2 text-white rounded-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </button>
        </form>
    </div>
  )
}

export default Comments







// import React from "react";

// import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio} from "@nextui-org/react";

// export default function App() {
//   const {isOpen, onOpen, onOpenChange} = useDisclosure();
//   const [scrollBehavior, setScrollBehavior] = React.useState("inside");

//   return (
//     <div className="flex flex-col gap-2">
//       <Button onPress={onOpen}>Open Modal</Button>
//       <RadioGroup
//         label="Select scroll behavior"
//         orientation="horizontal"
//         value={scrollBehavior}
//         onValueChange={setScrollBehavior}
//       >
//         <Radio value="inside">inside</Radio>
//         <Radio value="outside">outside</Radio>
//       </RadioGroup>
//       <Modal
//         isOpen={isOpen}
//         onOpenChange={onOpenChange}
//         scrollBehavior={scrollBehavior}
//       >
//         <ModalContent>
//           {(onClose) => (
//             <>
//               <ModalHeader className="flex flex-col gap-1">
//                 Modal Title
//               </ModalHeader>
//               <ModalBody>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Nullam pulvinar risus non risus hendrerit venenatis.
//                   Pellentesque sit amet hendrerit risus, sed porttitor quam.
//                 </p>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Nullam pulvinar risus non risus hendrerit venenatis.
//                   Pellentesque sit amet hendrerit risus, sed porttitor quam.
//                 </p>
                
//               </ModalBody>
//               <ModalFooter>
//                 <Button color="danger" variant="light" onPress={onClose}>
//                   Close
//                 </Button>
//                 <Button color="primary" onPress={onClose}>
//                   Action
//                 </Button>
//               </ModalFooter>
//             </>
//           )}
//         </ModalContent>
//       </Modal>
//     </div>
//   );
// }
