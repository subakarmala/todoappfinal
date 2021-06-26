import React, { useState } from 'react'

const InputArea = (props) => {
    const[inputText,setInputText]=useState("");
    const handleChange=(event)=>{
       setInputText(event.target.value);
    }
    
    return (
        <div className="container">
       
            <input type="text" placeholder="Enter your todos..." onChange={handleChange}
             value={inputText}/>
            <button onClick={()=>{
                props.additems(inputText);
                setInputText("");
            }} >Add</button>
       
        </div>
    )
}

export default  InputArea;
