import React from 'react';
import { useState } from 'react';
import './MovieUi.css'
import { useNavigate } from 'react-router-dom';
const AddCast = (props) => {
    const navigate = useNavigate();
    const [cast , setCast] = useState([])
    const [click , setClick] = useState(false);
    const [clickCount , setClickCount] = useState(1)
    const Click = () =>{
        {window.alert(`Cast ${clickCount} has been added`)}
        setClickCount(clickCount+1)
        navigate('/adddialogue')
        
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