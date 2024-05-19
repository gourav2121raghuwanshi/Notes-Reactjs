import React from 'react'
import {MdDeleteForever} from "react-icons/md"
import react from 'react'
const Note = ({id,text,date,handleDeleteNote}) => {
    // function deleteFunction(){
    //     deleteFunction(id);
    //     // console.log(event.target);
    // }
  return (
//      .note {

//     word-wrap: break-word;
//     overflow-wrap: break-word;
//     white-space: pre-wrap;
//   }
   
    <div className='note break-words whitespace-pre-wrap bg-[#fef68a]  rounded-lg  p-4 min-h-[170px] flex flex-col justify-between '>
        <span>{text}</span>
        <div className='note-footer flex items-center justify-between  '>
        <small>{date}</small>
        <MdDeleteForever onClick={()=>handleDeleteNote(id)} className=' delete-icon cursor-pointer ' size='1.3em'  /> </div>
    </div>
  )
}
export default Note;

