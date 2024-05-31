import noteContext from "./Notecontext";
import React from "react";
import { useState } from "react";


const NoteState = (props) => {
    const stateDefault= [ {
        "_id": "66556d79c47ae8d1e57fbad54a",
        "user": "66556d50c47ae8d1e57fb547",
        "title": "demo1",
        "description": "home demo1",
        "tag": "General",
        "date": "2024-05-28T05:36:57.320Z",
        "__v": 0
      },
      {
        "_id": "66556f995a43a4f996fce18ad2",
        "user": "66556d50c47ae8d1e57fb547",
        "title": "demo3",
        "description": "home demo3",
        "tag": "General",
        "date": "2024-05-28T05:46:01.470Z",
        "__v": 0
      },
      {
        "_id": "66556f995a43a4f996fce18sd2",
        "user": "66556d50c47ae8d1e57fb547",
        "title": "demo3",
        "description": "home demo3",
        "tag": "General",
        "date": "2024-05-28T05:46:01.470Z",
        "__v": 0
      },
      {
        "_id": "66556f995a43a4f996fce1sdf82",
        "user": "66556d50c47ae8d1e57fb547",
        "title": "demo3",
        "description": "home demo3",
        "tag": "General",
        "date": "2024-05-28T05:46:01.470Z",
        "__v": 0
      },
      {
        "_id": "66556f995a43a4f996fce18a2",
        "user": "66556d50c47ae8d1e57fb547",
        "title": "demo3",
        "description": "home demo3",
        "tag": "General",
        "date": "2024-05-28T05:46:01.470Z",
        "__v": 0
      }]

      const [state, setstate] = useState(stateDefault)


      // Add note: 
      const addNote = (title,descirption,tag) => {
        const notes = {
          "_id": "66556f995a43adsa4f996fce18a2",
          "user": "66556d50c47ae8d1e57fb547",
          "title": title,
          "description": descirption,
          "tag": tag,
          "date": "2024-05-28T05:46:01.470Z",
          "__v": 0
        }
        // console.log("new note added: ")
      setstate(state.concat(notes))
      }
    return (
        <noteContext.Provider value={{state, addNote}}>
            {props.children}
        </noteContext.Provider>
    )

}

export default NoteState;