import React from 'react';
import Note from './Note';
const Home = () => {
  
  return (
    
    <div className='m-3'>
      <h1 className='text-center'>I-notes</h1>
      <div className='my-3  justify-content-center d-flex'>
      <div className="card  p-4"  style={{width: "25rem"}}>
      <h1 className='text-center pb-3'>AddNote</h1>
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <textarea type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">tag</label>
    <input type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
      </div>
      </div>
      <h1>Your Notes</h1>
      <Note/>
    </div>
  )
}

export default Home
