import React,{ useContext, useEffect } from 'react';
import NoteContext from '../context/notes/Notecontext';

const About = () => {
  const a = useContext(NoteContext);
  useEffect(() => {
    a.update()
    // eslint-disable-next-line
  }, [])
  return (
    <div>
      hello i am about {a.state.name} {a.state.class}
    </div>
  )
}

export default About
