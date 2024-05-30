import React from 'react'
import noteContext from '../context/notes/Notecontext'
import { useContext } from 'react'
import NoteItem from './NoteItem'

const Note = () => {
  const note = useContext(noteContext);
  const {state, setstate} = note;

  return (


    <div className='row'>
      {state.map ((state)=>{
        
        return <NoteItem state={state}/>
      })}
    </div>
  )
}

export default Note
