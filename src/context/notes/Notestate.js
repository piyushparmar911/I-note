import noteContext from "./Notecontext";
import React from "react";
import { useState } from "react";


const NoteState = (props) => {
    const stateDefault= [ {
        "_id": "66556d79c47ae8d1e57fb54a",
        "user": "66556d50c47ae8d1e57fb547",
        "title": "demo1",
        "description": "home demo1",
        "tag": "General",
        "date": "2024-05-28T05:36:57.320Z",
        "__v": 0
      },
      {
        "_id": "66556f995a43a4f996fce182",
        "user": "66556d50c47ae8d1e57fb547",
        "title": "demo3",
        "description": "home demo3",
        "tag": "General",
        "date": "2024-05-28T05:46:01.470Z",
        "__v": 0
      }]

      const [state, setstate] = useState(stateDefault)

    return (
        <noteContext.Provider value={{state, setstate}}>
            {props.children}
        </noteContext.Provider>
    )

}

export default NoteState;