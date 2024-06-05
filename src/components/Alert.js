import React from 'react'

const Alert = (props) => {
  return (
    
    props.alert && <div className={`alert alert-${props.alert.color} d-flex align-items-center" role="alert`}>
    <div>

  <b>{props.alert.type}:</b> {props.alert.message}
    </div>
  </div> 
  )
}

export default Alert
