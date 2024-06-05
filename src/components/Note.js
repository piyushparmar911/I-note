import React from 'react'
import noteContext from '../context/notes/Notecontext'
import { useContext,useEffect,useRef,useState } from 'react'
import NoteItem from './NoteItem'
import Addnote from './Addnote'
import { useNavigate } from'react-router-dom'
const Note = (props) => {
  const notes = useContext(noteContext);
  const {state,fetchNote,editNotes} = notes;
  const history = useNavigate();
  
  useEffect(() => {
    if(localStorage.getItem('token')){
      fetchNote();
    }
    else{
    
      history("/login")
    }
    // eslint-disable-next-line
  }, [])
  const [note, setnotes] = useState({id: "" ,etitle: "" , edescription: "", etag: ""});
  
const updateNote =(currentnote)=>
  {
    ref.current.click();
    setnotes({id: currentnote._id,etitle: currentnote.title , edescription: currentnote.description , etag: currentnote.tag});
  }
  const ref = useRef(null);
  const refClose = useRef(null);
  //   console.log(state)
  
  const handleonClick = (e) => {
    editNotes(note.id,note.etitle,note.edescription,note.etag);
      e.preventDefault();
      refClose.current.click();
      
      props.showAlert("Note Updated Successfully", "Success", "success");
  };
  const onChange= (e) =>{
      setnotes({...note, [e.target.name]: e.target.value});
  }
  
  return (
    <div className='row'>
      
      <Addnote showAlert={props.showAlert} />
      {/* <!-- Button trigger modal --> */}
<button type="button" ref={ref} className="btn d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
 
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="etitle" name="etitle"   value={note.etitle} aria-describedby="emailHelp" onChange={onChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
  </div>
  
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">tag</label>
    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange}/>
  </div>
</form>
      </div>
      <div className="modal-footer">
        <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" disabled={note.etitle.length<4 || note.edescription.length<5 } className="btn btn-primary" onClick={handleonClick}>Update note</button>
      </div> 
    </div>
  </div>
</div>
      {state.map ((state)=>{
        return <NoteItem key={state._id} updateNote={updateNote} showAlert={props.showAlert} state={state}/>
      })}
    </div>
  )
}

export default Note
