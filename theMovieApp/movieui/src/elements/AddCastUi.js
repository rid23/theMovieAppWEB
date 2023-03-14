import React from 'react';
import { useState } from 'react';
import './MovieUi.css'
import { useNavigate } from 'react-router-dom';
import AddDialogues from './AddDialogue';
const AddCast = (props) => {
    const navigate = useNavigate();
    
    const [click , setClick] = useState(false);
    const [clickCount , setClickCount] = useState(1)

    const [castName , setCastName] = useState('')
    const [castCharacter , setCastCharacter] = useState('')
    const [castGender , setCastGender] = useState('');
    const Click = () =>{
        if (castName === '' || castCharacter === '' || castGender ===''){
            
                {window.alert('Please enter data in all the fields.')}
        }
        else{
            if(castGender === 'male' || castGender === 'female'){
                {window.alert(`Cast ${castName} or ${castCharacter} has been added`)}
                setClickCount(clickCount+1)
                setClick(!click)

            }else{
                window.alert('Gender should be either male or female Bro')
            }
            
            
        }

        
    };
    return (
        <>
        <div className = 'Ui'>
            <h2>Enter Cast Name</h2>
            <input type='text' onChange={(event) => {setCastName(event.target.value)} } />
            <h2>Enter Cast Character</h2>
            <input type='text' onChange={(event) => {setCastCharacter(event.target.value)}} />
            <h2>Enter Cast Gender</h2>
            <input placeholder='Male/Female' type = 'text' onChange={(event) => {setCastGender(event.target.value)}} />
            <button onClick={Click} className = 'AddCastButton' >Add Cast {clickCount}</button>
        </div>
        {click && <AddDialogues click = {click}  setClick = {setClick} />}
        </>
    )
}

export default AddCast;