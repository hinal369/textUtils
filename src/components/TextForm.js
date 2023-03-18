import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter Text Here...")

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    } 
    return (
        <>
            <div className='container mt-5'>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="textForm" rows="8"></textarea>
                </div>

                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3" onClick={handleUpClick}>Upper Case</button>
                </div>
            </div>
        </>
    )
}
