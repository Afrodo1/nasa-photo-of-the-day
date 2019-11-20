import React from "react";

const apodBox = props =>{
    return(
        <div className='apodBox'>
            <h2>{props.title}</h2>
            <p>{props.date}</p>
            <img className='space' alt='Daily Dose of Space' src={props.url}/>
            <p>{props.explanation}</p>
        </div>
    )
}

export default apodBox;