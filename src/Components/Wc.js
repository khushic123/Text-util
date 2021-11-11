import React from 'react'

function wordschar(props){
    if(props.para.length==0)
    return(
        <p style={{color: props.mode==='dark'?'white':'black'}}> 0 words and 0 characters </p>
    );
    else
    return(
        <p style={{color: props.mode==='dark'?'white':'black'}}> {props.para.split(" ").length} words and {props.para.length} characters </p>
    );
}
export default wordschar;