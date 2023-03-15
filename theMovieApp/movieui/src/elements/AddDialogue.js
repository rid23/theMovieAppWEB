import React , { useState } from  'react';
import { useNavigate } from 'react-router-dom';
import './AddDialogue.css';
const AddDialogues = (props) => {
    const navigate = useNavigate() 
    const [countDialogue , setCountDialogue] = useState(1)
    const [Fromtime , setFromTime] = useState('')
    const [toTime , setToTime] = useState('')
    const [dialogue , setDialogue] = useState('')
    const [dialoguesData , setDialoguesData] = useState([])
    const date = new Date();
    date.setHours(11);
    date.setMinutes(59);
    date.setSeconds(0);
    const defaultValue = date.toLocaleTimeString('en-US', {hour12: false});

    const handleClick = (newDialogue) => {
        if (dialogue === ''){
            {window.alert(`Enter a dialogue for ${props.cast}`)}
        }else{
            if(toTime <= Fromtime){
                {window.alert(`Time Input Incorrect Bro ------ Set the time properly`)}
            }else{
                {window.alert(`Dialogue FROM ${Fromtime} -- TO ${toTime} ${countDialogue} has been added`)}
                setDialogue('')
                setFromTime('')
                setToTime('')
                setDialoguesData([...dialogue, newDialogue]);
                setCountDialogue(countDialogue+1)
            }


        }


        
    }

    return (
        <>
            <hr />
            <div className="Ui">
            <h3 styles = {{margnTop:'10px'}}>Enter Dialogue {countDialogue} for {props.cast.toUpperCase()}</h3>
                <textarea placeholder='Enter Dialogue' value={dialogue} onChange={(event) => {setDialogue(event.target.value)}} />
                <h2>From</h2>
                <input type='time'  step='1' onChange={(event) => {setFromTime(event.target.value)}}  />
                <h2>To</h2>
                <input type = 'time'  step='1' onChange={(event) => {setToTime(event.target.value)}} />
                <button className = 'AddCastButton' onClick={handleClick} >Add Dialogue {countDialogue}</button>
                <button onClick={() => {
                    
                    if(dialoguesData.length < 1){
                        {window.alert(`No Dialogues for ${props.cast} has been added yet BRO : - >`)}
                    }else{
                    {window.alert(`All ${dialoguesData.length+1} has been saved`)}
                    props.setClick(!props.click)}}} 
                    
                    className='AddCastButton' >Save Dialogues</button>
            </div>
        </>
    )
}

export default AddDialogues;