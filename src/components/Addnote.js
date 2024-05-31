import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/Notecontext'
import { useState } from 'react';

const Addnote = () => {
    const note = useContext(noteContext);
    const {addNote} = note;

    const [state, setnotes] = useState({title: "" , description: "", tag: ""});
//   console.log(state)

const handleonClick = (e) => {
    e.preventDefault();
    addNote(state.title, state.description, state.tag);
};
const onChange= (e) =>{
    setnotes({...state, [e.target.name]: e.target.value});
}

  return (
    <div>
        
      <div className='my-3  justify-content-center d-flex'>
      <div className="card  p-4"  style={{width: "25rem"}}>
      <h3 className='text-center pb-3'>AddNote</h3>
      <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <textarea type="text" className="form-control" id="description" name="description" onChange={onChange}/>
  </div>
  
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">tag</label>
    <input type="text" className="form-control" id="tag" name="tag" onChange={onChange}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleonClick}>Submit</button>
</form>
      </div>
      </div>
      <h1>Your Notes</h1>
    </div>
  )
}

export default Addnote
