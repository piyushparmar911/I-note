import React, { useContext } from 'react'
import noteContext from '../context/notes/Notecontext'
import '../../src/App.css';
const NoteItem = (props) => {
  const note = useContext(noteContext);
  const { state, updateNote, showAlert } = props;
  const { deleteNote } = note;

  return (
    <div className='col-md-3'>
      <div className=' mt-4'>

        {/* <h1>states</h1> */}
        <div className='container m-2 '>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <div className='d-flex mb-3'>
                <h5 className="card-title">Card title :</h5> &nbsp; <p className='f-10'>{state.title}</p>
              </div>
              <div className='d-flex'>
                <h5 className="card-subtitle mb-2">Description :</h5> &nbsp;  <p>{state.description}</p>
              </div>
              <h5 className="card-text text-muted d-flex">date: <p>{state.date.slice(0, 10)}</p></h5>
              <h5 className="card-text text-muted d-flex">tag: <p>{state.tag}</p></h5>
              <div className='d-flex justify-content-end'>

                <i className='fas fa-trash-can mx-2 delete' onClick={() => {
                  deleteNote(state._id)
                  showAlert("note deleted successfully", "Success", "success")
                }
                }></i>
                <i className='fas fa-pen-nib mx-2 delete' onClick={() => { updateNote(state) }}></i>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteItem;
