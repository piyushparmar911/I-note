import noteContext from "./Notecontext";
import React, {useState} from "react";

const NoteState = (props) => {

    const s1 = {
        "name": "demo",
        "class": "5e"
    }
    const [state, setstate] = useState(s1)

    const update = () => {
        setTimeout(() => {
            
            setstate({
                "name": "change",
                "class": "5e1"
            })
        }, 1000);
    }
    return (
        <noteContext.Provider value={{state, update}}>
            {props.children}
        </noteContext.Provider>
    )

}

export default NoteState;