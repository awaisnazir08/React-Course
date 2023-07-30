import React,{useState} from 'react'
import propTypes from 'prop-types'
// import PropTypes from 'prop-types'
const [text, setText]= useState("Enter text here");
export default function TextForm(props) {
  return (
    <div className="container my-3">
        <h1>{props.heading}</h1>
<div className="mb-3">
  {/* <label for="myBox" className="form-label">Example textarea</label> */}
  <textarea className="form-control" id="myBox" rows="10" placeholder={props.placeholder}></textarea>
</div>
    <button className="btn btn-primary">Convert to UpperCase</button>
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


