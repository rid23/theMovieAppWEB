import React , { useState } from  'react';
import { useNavigate } from 'react-router-dom';
import './AddDialogue.css';
const AddDialogues = (props) => {
    const navigate = useNavigate() 
    const [countDialogue , setCountDialogueCount] = useState(1)
    const [Fromtime , setFromTime] = useState('')
    const [toTime , setToTime] = useState('')
    const [dialogue , setDialogue] = useState('')

    const date = new Date();
    date.setHours(11);
    date.setMinutes(59);
    date.setSeconds(0);
    const defaultValue = date.toLocaleTimeString('en-US', {hour12: false});

    const handleClick = () => {
        if (dialogue === ''){
            {window.alert(`Enter a dialogue for ${props.cast}`)}
        }else{
            {window.alert(`Dialogue FROM ${Fromtime} -- TO ${toTime} ${countDialogue} has been added`)}
            setDialogue('')
            setFromTime('')
            setToTime('')
            setCountDialogueCount(countDialogue + 1)
        }


        
    }

    return (
        <div className="Ui">
        <h3 styles = {{margnTop:'10px'}}>Enter Dialogues for {props.cast}</h3>
            <textarea placeholder='Enter Dialogue' value={dialogue} onChange={(event) => {setDialogue(event.target.value)}} />
            <h2>From</h2>
            <input type='time'  step='1' onChange={(event) => {setFromTime(event.target.value)}}  />
            <h2>To</h2>
            <input type = 'time'  step='1' onChange={(event) => {setToTime(event.target.value)}} />
            <button className = 'AddCastButton' onClick={handleClick} >Add Dialogue {countDialogue}</button>
            <button onClick={() => {
                {window.alert(`All ${countDialogue} has been saved`)}
                props.setClick(!props.click)}} className='AddCastButton' >Save Dialogues</button>
        </div>
    )
}

export default AddDialogues;