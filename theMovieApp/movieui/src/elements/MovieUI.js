import React from 'react';
import { useState } from 'react';
import './MovieUi.css'
import { useNavigate } from 'react-router-dom';

const Movie = () => {
    const navigate = useNavigate();
    const [click , setClick] = useState(false);
    const Click = () => {
        setClick(!click);

    }
    return (
        
 
        
        <div className = 'Ui'>
            <h2>Enter Movie Name</h2>
            <input type='text' />
            <h2>Enter Movie Duration</h2>
            <input type='number' />
            <button onClick={() => navigate('/addcast')} className ='AddCastButton'>Save Movie / Add Cast</button>
        </div>
        
    )
}

export default Movie;