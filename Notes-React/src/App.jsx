import { useEffect, useState } from "react";
import "./App.css";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Search from "./components/Search"
import Header from "./components/Header";
function App() {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      data: "23/09/2023",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      data: "28/09/2023",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      data: "13/06/2023",
    },
    {
      id: nanoid(),
      text: "This is my fourth note!",
      data: "03/03/2023",
    },
    {
      id: nanoid(),
      text: "This is my new note!",
      data: "23/09/2023",
    },

  ]);
  // ADDING NEW NOTE 
  function addNote(text) {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);

  }

  // DELETING A NOTE 
  function deleteNote(id) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  // SEARCHING NOTE 
  const [searchText, setsearchaText] = useState('');

  // DARK MODE 
  const [darkmode, setDarkMode] = useState(false);

  // SAVING NOTES TO LOCAL STORAGE
  useEffect(()=>{
    localStorage.setItem('react-notes-app-data',JSON.stringify(notes));
  },[notes])

  // FETCHING SAVED NOTES 
  useEffect(()=>{
    const savedNotes=JSON.parse(localStorage.getItem('react-notes-app-data'));
    if(savedNotes){
      setNotes(savedNotes);
    }
  } ,[])
  return (
    <div className={`${darkmode && 'dark-mode'}`}>
      <div className="container max-w-[960px] min-h-[100vh] mx-auto pr-[15px] pl-[15px] ">
        <Header handletoggleDarkMode={setDarkMode} />
        <Search handleSearch={setsearchaText} />
        <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
      </div>
    </div>
  );
}

export default App;
