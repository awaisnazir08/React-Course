import React,{useState} from 'react'
import propTypes from 'prop-types'
// import PropTypes from 'prop-types'
export default function TextForm(props) {

  const handleOnChange=(event)=>{
    console.log("On change");
    setText(event.target.value);
  }

  const handleOnClick=()=>{
    console.log("On click "+ text);
    let textt=text.toUpperCase();
    setText(textt);
  }

  const [text, setText]= useState("Write here");
  // setText("Write text here");
  return (
    <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <label for="myBox" className="form-label">Example textarea</label> */}
          <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="10" placeholder={props.placeholder}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleOnClick} >Convert to UpperCase</button>
    </div>
  )
}

TextForm.propTypes={ heading: propTypes.string.isRequired,
                     placeholder: propTypes.string
}
TextForm.defaultProps={
    heading: "This is the heading",
    placeholder: "Write Here"
}


