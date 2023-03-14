import React , { useState } from  'react';
import { useNavigate } from 'react-router-dom';
import './AddDialogue.css';
const AddDialogues = () => {
    const navigate = useNavigate() 
    const [countDialogue , setCountDialogueCount] = useState(1)
    
    const [dialogue , setDialogue] = useState('')
    const handleClick = () => {
       
        {window.alert(`Dialogue ${countDialogue} has been added`)}
        setCountDialogueCount(countDialogue + 1)
        navigate('/addcast')
    }

    return (
        <div className="Ui">
            <textarea placeholder='Enter Dialogue' />
            <h2>From</h2>
            <input type = 'time' />
            <h2>To</h2>
            <input type = 'time' />
            <button className = 'AddCastButton' onClick={handleClick} >Add Dialogue {countDialogue}</button>
        </div>
    )
}

export default AddDialogues;