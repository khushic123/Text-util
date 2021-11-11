import React, {useState} from 'react';
import Wc from './Wc';
import Findtext from './Findtext';

function Text(props){

    const handleonclickupper=()=>{
        console.log("button clicked for upper case"+ text);
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showalert('converted to upper case :','success')
    }
    const handleonchange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const handleonchange1=(event)=>{
        console.log("on change");
        setText1(event.target.value);
    }

    const handleonclicklower=()=>{
        console.log("button clicled for upper case" +text);
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showalert('converted to lower case :','success')

    }
    const handlespaces =()=>{
        let newtext = text.replace(/\s+/g, ' ').trim()
        setText(newtext);
        props.showalert('cleared extra spaces :','success')
        }
        const handlecopy =(event)=>{
                setText(event.target.value);
                let newtext=navigator.clipboard.writeText(text);
                props.showalert('text copied and cleared:','success')
        };

    const [text,setText]=useState('');
    const [text1,setText1]=useState('');
    return (
        <>
        <div className="mb-3">
        <h1 style={{color: props.mode==='dark'?'white':'black'}}> {props.heading} </h1>
  {/* <label HTMLFor="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
  <button className="btn btn-primary" onClick={handleonclickupper}> Convert to uppercase</button>
  <button className="btn btn-primary" onClick={handleonclicklower}> Convert to lowercase</button>
  <button className="btn btn-primary" onClick={handlespaces}> Clear extra spaces</button>
  <button className="btn btn-primary" onClick={handlecopy}> Copy & Clear Text</button>
  <h4 style={{color: props.mode==='dark'?'white':'black'}}> Type the word you want to search </h4> 
  <textarea className="form-control form1" id="exampleFormControlTextarea1" rows="1" value={text1} onChange={handleonchange1}  style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'black'}}></textarea>

         </div>

         <div className="mb-3">
             <h2 style={{color: props.mode==='dark'?'white':'black'}}> SUMMARY </h2>
             
             {/* For words and characters count */}
             <Wc para={text} mode={props.mode}/>  
             <Findtext content={text} word={text1} mode={props.mode} />

             {/* <h2 style={{color: props.mode==='dark'?'white':'black'}}> PREVIEW</h2>
             <p style={{color: props.mode==='dark'?'white':'black'}}> {text} </p> */}

         </div>
      </>

    );
}

export default Text;