// import {useState, useEffect} from "react";
// import { fakeData as notes } from "../assets/fakeData.js";
// import {db} from "../appwrite/databases";
// import {databases} from "../appwrite/config";
import NoteCard from "../components/NoteCard";
import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";
import Controls from "../components/Controls";

const NotesPage = () => {

  const { notes, setNotes } = useContext(NoteContext);
  // const [notes,setNotes] = useState([]);

  // useEffect(()=>{
  //   init();
  // },[]); 

  // const init = async ()=>{
  //     const response = await db.notes.list();
  //     setNotes(response.documents);
  // };

  return (
    <>
      <div> 
        {notes.map((note) => (
            <NoteCard note={note} key={note.$id} />
        ))}
        
        <Controls/>
      </div>
    </>
  )
};
export default NotesPage