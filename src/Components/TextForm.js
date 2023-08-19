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
    props.showAlert("Converted to Upper Case",'success');

  }

  const handleLoClick=()=>{
    // console.log("On click "+ text);
    let textt=text.toLowerCase();
    setText(textt);
    props.showAlert("Converted to Lower Case",'success');

  }

  const wordCheck=()=>{
    const words = text.trim().split(/\s+/); // Split by one or more spaces
    return words.length;
  }

  const nospace=()=>{
    let n=text.split(" ");
    let noSpaceCharacters=n.join("").length;
    alert(`${noSpaceCharacters} characters present without any spaces!`,) ;
  }

  const clearText=()=>{
    setText("");
    props.showAlert("Cleared text",'success');

  }
  const copyText=()=>{
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied text to ClipBoard",'success');

  }

  const removeExtraSpaces=()=>{
    let textt = text.replace(/\s+/g, ' ').trim();
    setText(textt);
    props.showAlert("Extra Spaces removed",'success');
  }

  const timeToRead=()=>{
    const words = text.trim().split(/\s+/); // Split by one or more spaces
    return words.length;
  }
  const [text, setText]= useState("");
  // setText("Write text here");
  return (
    <>
    <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
          {/* <label for="myBox" className="form-label">Example textarea</label> */}
          <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="10" placeholder={props.placeholder} style={{backgroundColor:`${props.mode==='light'?'white':props.formColor}`,color:`${props.mode==='light'?'black':'white'}`}}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary my-1" onClick={handleOnClick} >Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary my-1" onClick={handleLoClick} >Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary my-1" onClick={nospace} >Characters without Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary my-1" onClick={copyText} >Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary my-1" onClick={clearText} >Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary my-1" onClick={removeExtraSpaces} >Remove Extra Spaces</button>


    </div>
    <div className={`container my-4 text-${props.mode==='light'?'dark':'light'}`}>
      <h2>{props.summary}</h2>
      The text has <b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters
      <br/>
      Estimated time to read: <b>{text.split(" ").filter((element)=>{return element.length!==0}).length*0.008}</b> minutes
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


