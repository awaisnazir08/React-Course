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

  const clearText=()=>{
    setText("");
  }
  const copyText=()=>{
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const removeExtraSpaces=()=>{
    let textt = text.replace(/\s+/g, ' ').trim();
    setText(textt);
  }

  const [text, setText]= useState("");
  // setText("Write text here");
  return (
    <>
    <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
          {/* <label for="myBox" className="form-label">Example textarea</label> */}
          <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="10" placeholder={props.placeholder} style={{backgroundColor:`${props.mode==='light'?'white':'#042743'}`,color:`${props.mode==='light'?'black':'white'}`}}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleOnClick} >Convert to UpperCase</button>
        <button className="btn btn-primary" onClick={handleLoClick} >Convert to LowerCase</button>
        <button className="btn btn-primary" onClick={nospace} >Characters without Spaces</button>
        <button className="btn btn-primary" onClick={copyText} >Copy Text</button>
        <button className="btn btn-primary" onClick={clearText} >Clear Text</button>
        <button className="btn btn-primary" onClick={removeExtraSpaces} >Remove Extra Spaces</button>


    </div>
    <div className={`container my-4 text-${props.mode==='light'?'dark':'light'}`}>
      <h2>{props.summary}</h2>
      The text has <b>{wordCheck()}</b> words and <b>{text.length}</b> characters
      <br/>
      Estimated time to read: <b>{text.split(" ").length*0.08}</b> minutes
      <br></br>
      {/* <br></br> */}
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter text in the above box to preview it here..!!"}</p>
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


