import React,{useState} from 'react'
import propTypes from 'prop-types'
import './TextForm.css'
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

  const handleLoClick=()=>{
    // console.log("On click "+ text);
    let textt=text.toLowerCase();
    setText(textt);
  }

  const wordCheck=()=>{
    let lastchar=text.charAt(text.length-1)
    if(lastchar===" ")
    {
      return text.split(" ").length-1;
    }
    return text.split(" ").length;
  }

  const nospace=()=>{
    let n=text.split(" ");
    let noSpaceCharacters=n.join("").length;
    alert(`${noSpaceCharacters} characters present without any spaces!`,) ;
  }

  const [text, setText]= useState("");
  // setText("Write text here");
  return (
    <>
    <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <label for="myBox" className="form-label">Example textarea</label> */}
          <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="10" placeholder={props.placeholder}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleOnClick} >Convert to UpperCase</button>
        <button className="btn btn-primary" onClick={handleLoClick} >Convert to LowerCase</button>
        <button className="btn btn-primary" onClick={nospace} >Characters without Spaces</button>

    </div>
    <div className='container my-4'>
    <h2>{props.summary}</h2>
    The text has <b>{wordCheck()}</b> words and <b>{text.length}</b> characters
    <br/>
    Estimated time to read: <b>{text.split(" ").length*0.08}</b> minutes
    <br></br>
    {/* <br></br> */}
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
  )
}

TextForm.propTypes={ heading: propTypes.string.isRequired,
                     placeholder: propTypes.string,
                     summary: propTypes.string.isRequired
}
TextForm.defaultProps={
    heading: "This is the heading",
    placeholder: "Write Here",
    summary: "Text Summary"
}


