import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Coverted to uppercase","success")
    }
    const handleLoClick=()=>{
      // console.log("Uppercase was clicked" + text);
      let newText=text.toLowerCase();
      setText(newText)
      props.showAlert("Coverted to Lowercase","success")
  }

    const handleOnChange=(event)=>{
        // console.log("On change")
        setText(event.target.value)
    }
    const [text,setText]=useState('')

  return (
    <>
    <div className='container ' style={{color:props.mode==='light'?'black':'white'}}>
 
 <h1>{props.heading}</h1>   
<div className="mb-3" style={{backgroundColor: props.mode==='light'?'white':'grey'}}>

  <textarea className={"form-control"}  style={{backgroundColor: props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-primary mx-3' onClick={handleLoClick}>Convert to Lowercase</button>
</div>
<div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
  <h2>Your text summary</h2>
  <p>{text.trim().split(/\s+/).length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} minutes read</p>
  <h2>Preview</h2>
  <p >{text}</p>
</div>
</>
  )
}
