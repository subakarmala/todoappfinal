import React from 'react'

const TodoItems = (props) => {
    return (
        <div onClick={()=>props.deleteItems(props.id)}>
            <li style={{padding:'7px',border:"2px solid pink",  width:"200px",
             marginLeft:"50px",fontFamily:"cursive", marginTop:"10px",borderRadius:"10px", backgroundColor:"rgb(168, 32, 66)"}}>
                <div>
                {props.items}
                </div>
            </li>
            

        </div>
    )
}

export default TodoItems
