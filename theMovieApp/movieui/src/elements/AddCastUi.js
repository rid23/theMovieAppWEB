import React from 'react';
import { useState } from 'react';
import './MovieUi.css'

const AddCast = (props) => {
    const [cast , setCast] = useState([])
    const [click , setClick] = useState(false);
    const [clickCount , setClickCount] = useState(1)
    const Click = () =>{
        setClickCount(clickCount+1)
    };
    return (
        <div className = 'Ui'>
            <h2>Enter Cast Name</h2>
            <input type='text' />
            <h2>Enter Cast Character</h2>
            <input type='text' />
            <h2>Enter Cast Gender</h2>
            <input placeholder='Male/Female' type = 'text'/>
            <button onClick={Click} className = 'AddCastButton' >Add Cast {clickCount}</button>
        </div>
    )
}

export default AddCast;