import NoteContext from './NoteContext';
import React, { useState } from 'react'

const NoteState = (props) => {
    const intialNotes = [];
    const [notes, setNotes] = useState(intialNotes);
    // Get all notes
    const getAllNotes = async ()=> {
        const url = 'http://localhost:5000/api/notes/fetchAllNotes';
        const response = await fetch(url, {
            'method' : 'GET',
            'headers' : {
                'Content-Type' : 'application/json',
                'auth-token': localStorage.getItem('token'),
            }
        })
        const allNotes = await response.json();
        setNotes(allNotes);
    }
    //Add a note
    const addNote = async (title , description, tag) => {
        const url = `http://localhost:5000/api/notes/addNote`;
        const response = await fetch(url, {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            'body': JSON.stringify({title, description, tag})
        })
        const addedNote = await response.json(); 
        console.log(addedNote);
        setNotes(notes.concat(addedNote));
    }
    //Delete a note
    const deleteNote = async (id) => {
        console.log("Deleting the node with id : ", id);
        //API call
        const url = `http://localhost:5000/api/notes/deleteNote/${id}`;
        const response = await fetch(url, {
            'method' : 'DELETE',
            'headers' : {
                'Content-Type' : 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
        const json = await response.json();
        console.log(json);
        const newNotes = notes.filter((note)=>{ return note._id !== id});
        setNotes(newNotes);
    }
    //update a note
    const updateNote = async (id, title, description, tag) => {
        //API Call
        const url = `http://localhost:5000/api/notes/updateNote/${id}`
        const response = await fetch(url, {
            'method' : 'PUT',
            'headers' : {
                'Content-Type' : 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            'body': JSON.stringify({ 'title': title, 'description': description, 'tag' : tag})
        })
        const json = await response.json();
        console.log(json);
        let updatedNotes = JSON.parse(JSON.stringify(notes));
        for (let i = 0; i < updatedNotes.length; i++) {
           if (notes[i]._id === id){
               updatedNotes[i].title = title;
               updatedNotes[i].description = description;
               updatedNotes[i].tag = tag;
               break;
           }
       }
        setNotes(updatedNotes);
    }
    return(
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, updateNote, getAllNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;