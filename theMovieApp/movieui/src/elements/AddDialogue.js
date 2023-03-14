import React , { useState } from  'react';
import { useNavigate } from 'react-router-dom';
import './AddDialogue.css';
const AddDialogues = (props) => {
    const navigate = useNavigate() 
    const [countDialogue , setCountDialogueCount] = useState(1)
    
    const [dialogue , setDialogue] = useState('')
    const handleClick = () => {
        if (dialogue === ''){
            {window.alert(`Enter a dialogue for ${props.cast}`)}
        }else{
            {window.alert(`Dialogue ${countDialogue} has been added`)}
            setDialogue('')
            setCountDialogueCount(countDialogue + 1)
        }


        
    }

    return (
        <div className="Ui">
        <h3 styles = {{margnTop:'10px'}}>Enter Dialogues for {props.cast}</h3>
            <textarea placeholder='Enter Dialogue' value={dialogue} onChange={(event) => {setDialogue(event.target.value)}} />
            <h2>From</h2>
            <input type = 'time' />
            <h2>To</h2>
            <input type = 'time' />
            <button className = 'AddCastButton' onClick={handleClick} >Add Dialogue {countDialogue}</button>
            <button onClick={() => {
                {window.alert(`All ${countDialogue} has been saved`)}
                props.setClick(!props.click)}} className='AddCastButton' >Save Dialogues</button>
        </div>
    )
}

export default AddDialogues;