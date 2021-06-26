import React, { useState }  from 'react'
import InputArea from './inputArea'
import TodoItems from './TodoItems';
import './todoList.css';
import './inputArea.css'
const TodoList = () => {
   
    const[lists,setItems]=useState([]);
    let dateObj=new Date();
    let days=["Sun","Mon","Tue","Wed","Thurs",
    "Fri","Sat"];
    let months=["Jan","Feb","Mar","Apr","May",
    "Jun","July","Aug","Sep","Oct","Nov","Dec"];
    let date=dateObj.getDate();
    let day=days[dateObj.getDay()];
    let month=months[dateObj.getMonth()];


    const addItems = (inputText) => {
     if(inputText===""){
         return false
        }else{
    setItems((prevItems) => {
                return [...prevItems, inputText]
                })
            } }
    
    const deleItems =(id)=>{
        setItems((prevItems)=>{
            return prevItems.filter((lists,index)=>{
                return index!==id;
            });
        });
    }
    
    return (
        <div className="todo-app">
            
            <h1>Today <span>{day} {date} {month}</span></h1>
         <div className="todo-appinp">  
        <InputArea additems={addItems}/>
        <div className="todo-applist">
            <ul>
                {
                 lists.map((lists,index)=>{
                     return(
                         
                     <TodoItems key={index}  items={lists} deleteItems={deleItems} id={index}/>
                     )
                     })
                 
                }
                 
            </ul>
            </div>
        </div>
        </div>
    )
}

export default TodoList;
