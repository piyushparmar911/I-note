import noteContext from "./Notecontext";
import React from "react";
import { useState } from "react";


const NoteState = (props) => {
  const host = "http://localhost:5000";
    const stateDefault= []

      const [state, setstate] = useState(stateDefault)

      const fetchNote = async() => {
        // api
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1NTZkNTBjNDdhZThkMWU1N2ZiNTQ3In0sImlhdCI6MTcxNjg3NDU5Nn0.UpdbXt-EQgU574Bc-q1mWhLTR7KHh0C1M9T795CvxuM"
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }});
          const json = await response.json();
           setstate(json)
          
          
      }


      // Add note: 
      const addNote = async(title,description,tag) => {
        // api
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1NTZkNTBjNDdhZThkMWU1N2ZiNTQ3In0sImlhdCI6MTcxNjg3NDU5Nn0.UpdbXt-EQgU574Bc-q1mWhLTR7KHh0C1M9T795CvxuM"
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({title,description,tag}),});
          
          const json = await response.json({title,description,tag});
          // logic to add notes
        const notes = {
          "_id": json._id,
          "user": json.user,
          "title": title,
          "description": description,
          "tag": tag,
          "date": json.date,
          "__v": json.__v
        }
        // console.log("new note added: ")
        setstate(state.concat(notes))
      }
      
      // delete note: 
      const deleteNote = async(id) => {
        // api call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: "DELETE", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1NTZkNTBjNDdhZThkMWU1N2ZiNTQ3In0sImlhdCI6MTcxNjg3NDU5Nn0.UpdbXt-EQgU574Bc-q1mWhLTR7KHh0C1M9T795CvxuM"
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }
        });
        const json =  response.json();
        console.log(json);
        setstate(state.filter(state => state._id!== id))
      }


      // update note:
      const editNotes =  async (id,title,description,tag) => {
        // api call
        const response = await fetch(`${host}/api/notes/updatenote${id}`, {
          method: "PUT", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1NTZkNTBjNDdhZThkMWU1N2ZiNTQ3In0sImlhdCI6MTcxNjg3NDU5Nn0.UpdbXt-EQgU574Bc-q1mWhLTR7KHh0C1M9T795CvxuM"
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({title,description,tag}),
        })

          const json = response.json();
        // logic to edit in client
        for (let index = 0; index < state.length; index++) {
          const element = state[index];
          if (element._id === id) {
            element.title = title;
            element.description = description;
            element.tag = tag;
          }
          
        }
      }

    return (
        <noteContext.Provider value={{state,fetchNote, addNote,deleteNote,editNotes}}>
            {props.children}
        </noteContext.Provider>
    )

}

export default NoteState;