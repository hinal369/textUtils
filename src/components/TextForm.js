import React, { useState } from 'react'
// background: #706464;

export default function TextForm(props) {
    const [text, setText] = useState("Enter Text Here...")

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    } 

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

   
    const handleCapClick = () => {
        const words = text.split(" ");
        let newText = '';
        words.forEach(element => {
            const firstChar = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase() + " ";
            newText = newText + firstChar;
        });
        setText(newText)
    }

    const handleClearClick = () => {
        document.getElementById('textForm').value = "";
    }

    const handleCopyClick = () => {
        const copyText = document.getElementById("textForm");
        copyText.select();
        copyText.setSelectionRange(0, 99999); 
        navigator.clipboard.writeText(copyText.value);
    }

    const handleRemoveExtraSpaceClick = () => {
        const newStr = text.split(/[ ]+/);
        setText(newStr.join(" "));
    }
    return (
        <>
            <div className='container mt-5'>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="textForm" rows="8"></textarea>
                </div>

                <div className="col-auto">
                    <button type="button" className="btn btn-primary m-1" onClick={handleUpClick}>Upper Case</button>
                    <button type="button" className="btn btn-primary m-1" onClick={handleLowClick}>Lower Case</button>
                    <button type="button" className="btn btn-primary m-1" onClick={handleCapClick}>Capitalized Case</button>
                    <button type="button" className="btn btn-primary m-1" onClick={handleClearClick} >Clear</button>
                    <button type="button" className="btn btn-primary m-1" onClick={handleCopyClick}>Copy</button>
                    <button type="button" className="btn btn-primary m-1" onClick={handleRemoveExtraSpaceClick}>Remove Extra Spaces</button>
                </div>       

                <div className="col mt-2">
                    <h5>Total Character : {text.length}</h5>
                    <h5>Total Words : {text.split(" ").length}</h5>
                </div>      
            </div>
        </>
    )
}
