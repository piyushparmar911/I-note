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
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Title</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Description</label>
    <textarea type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">tag</label>
    <input type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
      </div>
      </div>
      <h1>Your Notes</h1>
      <Note/>
    </div>
  )
}

export default Home
