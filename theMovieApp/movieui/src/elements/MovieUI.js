import React from 'react';
import { useState } from 'react';
import './MovieUi.css'
import { useNavigate } from 'react-router-dom';
import AddCast from './AddCastUi';
const Movie = () => {
    const navigate = useNavigate();
    const [click , setClick] = useState(false);
    const [showCastUi , setShowCastUi] = useState(false)

    const [movieName , setMovieName] = useState('')
    const [movieDuration , setMovieDuration] = useState(0)
    const Click = () => {
        if (movieName == '' || movieDuration <= 0){
            {window.alert(`Fill The Appropriate Data BRO : - >`)}
        }else{
            setShowCastUi(!showCastUi)
        }



    }
    return (
        <>
        <div className = 'Ui'>
            <h2>Enter Movie Name</h2>
            <input type='text' onChange={(event) => {setMovieName(event.target.value)}} />
            <h2>Enter Movie Duration</h2>
            <input type='number' onChange={(event) => {setMovieDuration(event.target.value)}} />
            <div className = 'button-wrapper'>
                <button className ='SaveButton'>Save Movie</button>
                <button onClick={() => {Click()}} className ='AddCastButton'>Add Cast / Dialogues Data</button>
            </div>
        </div>
        {showCastUi && <AddCast moviename = {movieName}  />}
        
        </>
    )
}

export default Movie;