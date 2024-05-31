import React from 'react'
import noteContext from '../context/notes/Notecontext'
import { useContext } from 'react'
import NoteItem from './NoteItem'
import Addnote from './Addnote'

const Note = () => {
  const note = useContext(noteContext);
  const {state} = note;
  

  return (


    <div className='row'>
      <Addnote/>
      {state.map ((state)=>{
        return <NoteItem key={state._id} state={state}/>
      })}
    </div>
  )
}

export default Note
