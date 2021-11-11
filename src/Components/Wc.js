import React from 'react'

function wordschar(props){
    return(
        <p style={{color: props.mode==='dark'?'white':'black'}}> {props.para.split(" ").filter((element)=>{return element.length!=0}).length} words and {props.para.replace(/\s/g, "").length} characters </p>
    );
}
export default wordschar;