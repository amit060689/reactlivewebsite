import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();       
        setText(newText);
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success")
    }    
    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success")
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "success")
    }
    const handleClrClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text is Cleared", "success")
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    
  return (
    <>
        <div className='container mb-40' style={{color: props.mode === 'dark'? 'white' : 'black'}}>
            <div className='row'>
                <div className='col-md-6'>
                    <h3 className="mb-4 my-4 fw-bold">{props.heading}</h3>
                    <div className="mb-3">
                     <textarea className="form-control" placeholder="Enter Your Text" style={{backgroundColor: props.mode === 'dark'? '#000f70' : 'white', color: props.mode === 'dark'? 'white' : 'black'}} value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                    </div>
                    <h6 className="fw-bold mb-4">Your Text Summary {text.trim() === '' ? 0 : text.split(" ").length} Words and {text.length} Characters {0.008 * text.split(" ").length} minutes to read</h6>
                    <button className="btn btn-primary me-2" onClick={handleUpClick}>UpperCase</button>
                    <button className="btn btn-warning me-2" onClick={handleLowClick}>LowerCase</button>
                    <button className="btn btn-success me-2" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-info me-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                    <button className="btn btn-danger me-2" onClick={handleClrClick}>Clear</button>
                </div>
                <div className='col-md-6'>
                 <h3 className="mb-4 my-4 fw-bold">Preview Text</h3>
                 <p>{text.length>0?text:"Enter Text to preview"}</p>
                </div>
            </div>
        </div>
    </>
  )
}
