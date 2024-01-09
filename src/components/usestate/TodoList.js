import React, { useState } from 'react'

const TodoList = () => {
    const[todoInput, setInputTodo]=useState('');
    const[todoList,setTodoList]=useState([])
    const submitHandler=(e)=>{
    e.preventDefault();
    const newTodos=[...todoList,todoInput]
    setTodoList(newTodos)
    setInputTodo("")
    
    }
    
    const deleteHandler=(indexValue)=>{
        const deleteTodo=todoList.filter((eachItem,index) =>index !==indexValue)
            setTodoList(deleteTodo)
        console.log(deleteTodo);
    }
    
    
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" name="text" value={todoInput}
        onChange={(e)=>{ setInputTodo(e.target.value)}}
        placeholder='enter a text here '/>
        <input type='submit' value='Add' name='Add'/>
      </form>
      <hr/>
      {todoList.map((eachItem,index)=>{
      return  <div key={index}> <h4> {eachItem}</h4>  <button onClick={()=>{deleteHandler(index)}}> delete</button></div>
      })}
    </div>
  )
}

export default TodoList
