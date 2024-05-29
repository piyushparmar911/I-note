import React from 'react'

const NoteItem = () => {
  return (
    <div>
      <>
    <div className='text-center mt-4'>
        
    <h1>Notes</h1>
    <div className='container m-5 p-4'>
      <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
    <div className='d-flex mb-3'>
    <h5 className="card-title">Card title :</h5> &nbsp; <p className='f-10'>note1</p>
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
