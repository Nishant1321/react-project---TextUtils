import React, {useState} from 'react'

export default function TextForm(props) {
    //text to uppercase
    const handleUpclick=()=>{
        console.log("uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Convert to Uppercase!","success");
    }
    //text to lowercase
    const handleloclick=()=>{
     let newText=text.toLowerCase();
     setText(newText)
     props.showAlert("Convert to LowerCase!","success");
    }
     
   //clear Text
   const handleclearclick=()=>{
     setText('')
     props.showAlert("Cleacr text!","success");
   }
   // copy text
   const handlecopy=()=>{

    
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy text!","success");
    }

     //handle Extra spaces
     const handleExtraSpaces =()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Handel the ExtraSpaces !","success");
    }
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const [text, setText]=useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading} </h1>
<div className="mb-3">
 <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to UperCase</button>

<button className="btn btn-primary mx-1" onClick={handleloclick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-1" onClick={handleclearclick}>Clear Text</button>
<button className="btn btn-primary mx-1" onClick={handlecopy}>Copy Text</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove ExtraSpace</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summery</h1>
        <p>{text.split(" ").length} words and {text.length} Character</p>
        <p> {0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter somthing in the text above to priview it here"}</p>
    </div>
    </>
  )
}
