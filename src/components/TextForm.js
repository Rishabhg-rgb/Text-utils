// React hooks

import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')
    // text = 'smcn'  !!wrong way to change a text 
    // setText('correct way') !!correct way to change
    const handleUpClick = () => {
        // console.log("uppercase was clicked" + text)
        let newText = text.toUpperCase()
        props.alert('Your text is in uppercase','success')
        setText(newText)

        // setText('you have clicked on handleUpClick')
    }
    const handleOnChange = (event) => {
        // console.log("uppercase was clicked");
        setText(event.target.value);
    }
    const handleloClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.alert('Your text is in lowercase','success')
    }
    const handleclear = () => {
        setText('')
        props.alert('Text box is cleared','success')
    }
    const handlecapclick = () => {
        let newText = text.toLowerCase()
        let captext = newText.charAt(0).toUpperCase() + newText.slice(1)

        setText(captext)
        props.alert('your text is in captilize','success')
    }

    return (
        <>
            <div className="container">
                <div className="mb-3" >
                    <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
                    <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="4" ></textarea>
                    <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>
                    <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to Lower case</button>
                    <button className="btn btn-primary " onClick={handleclear}>Clear text</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={handlecapclick}>Sentence text</button>
                </div>
            </div>
            <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
                <h1>Your text Summary</h1>
                <p>{text.split(' ').filter((element)=>element.length!==0)} words Your text has {text.length} alphabets <br /></p>
                <h4>preview</h4>
                <p>{text}</p>



            </div>
        </>
    )
}
