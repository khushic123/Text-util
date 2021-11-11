import React from 'react'

function find(props){
    if(props.content.includes(props.word))
    return(
        <p style={{color: props.mode==='dark'?'white':'black'}}>FOUND</p>
    );
    else
    return(
        <p style={{color: props.mode==='dark'?'white':'black'}}> NOT FOUND</p>
    );
}
export default find;