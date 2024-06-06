import NoteContext from './Notecontext';
import { useState } from'react'

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const stateDefault = [];

  const [state, setState] = useState(stateDefault);

  const fetchNote = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found in localStorage');
        return;
      }
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
      });

      const json = await response.json();
      if (Array.isArray(json)) {
        setState(json);
      } else {
        // console.log("Fetched notes are not an array");
      }
    } catch (error) {
      // console.error("Failed to fetch notes", error);
    }
  };

  const addNote = async (title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify({ title, description, tag }),
      });

      const json = await response.json();
      setState((prevState) => prevState.concat(json));
    } catch (error) {
      console.error("Failed to add note", error);
    }
  };

  const deleteNote = async (id) => {
    try {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
      });

      const json = await response.json();
      console.log(json);
      setState((prevState) => prevState.filter((note) => note._id !== id));
    } catch (error) {
      console.error("Failed to delete note", error);
    }
  };

  const editNotes = async (id, title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag }),
      });

      const json = await response.json();
      console.log(json);
      const newNotes = JSON.parse(JSON.stringify(state));
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if (element._id === id) {
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag;
          break;
        }
      }
      setState(newNotes);
    } catch (error) {
      console.error("Failed to update note", error);
    }
  };

  return (
    <NoteContext.Provider value={{ state, fetchNote, addNote, deleteNote, editNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;