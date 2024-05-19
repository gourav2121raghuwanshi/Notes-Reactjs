import React from 'react'
import Note from './Note'
import Addnote from "./Addnote"
const  NotesList = ({notes,handleAddNote,handleDeleteNote}) => {
  return (
    <div>
   
    <div className='notes-list grid gap-4  '>
   
    {notes.map((note)=><Note handleDeleteNote={handleDeleteNote} id={note.id}  text={note.text} date={note.data}  />)}
    <Addnote handleAddNote={handleAddNote}/>
    </div>
    </div>
  )
}
export default NotesList;