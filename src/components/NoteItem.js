import React from 'react';
import { useContext } from 'react';
import noteContext from '../context/notes/Notecontext';

const NoteItem = () => {
  const first = useContext(noteContext);
  const {state ,setstate} = first;

  return (
    <div>
      <>
    <div className='text-center mt-4'>
        
    {/* <h1>Notes</h1> */}
    <div className='container m-5 p-4'>
      <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
    <div className='d-flex mb-3'>
    <h5 className="card-title">Card title :</h5> &nbsp; <p className='f-10'>{state.map  ((state) =>{
      return state.title
    })}</p>
    </div>
    <div className='d-flex'>
    <h5 className="card-subtitle mb-2">Description :</h5> &nbsp;  <p>it is hear</p>
    </div>
    <h5  className="card-text text-muted">tag</h5>
    
  </div>
</div>
    </div>
    </div>
    </>
    </div>
  )
}

export default NoteItem
