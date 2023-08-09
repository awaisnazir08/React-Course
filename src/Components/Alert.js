import React from 'react'

function Alert(props) {
    const Capitalize=(word)=>{
        let capital=word.toLowerCase();
        let f=capital[0].toUpperCase();
        return f+capital.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{Capitalize(props.alert.type)}</strong>: {props.alert.message}
    </div>
  )
}

export default Alert
