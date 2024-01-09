import React, { useReducer } from 'react'

const initialState=[]
function reducer(state, action) {
    switch(action.type) {

        case 'ADD_TASK': return [

            ...state, {
                id: state.length + 1,
                name: action.payload
            }
        ]
        case 'DELETE_TASK': return state.filter((d)=> d.id!==action.payload)
        default: return state;
    }
}
    


const Todo = () => {
    const [todo,dispatch]= useReducer(reducer,initialState)
    console.log(todo);
  return (
    <div>
    <h4> {todo.length}</h4>
      <input type='text' placeholder='enter text'
       onBlur={(e)=>dispatch({type:'ADD_TASK', payload:e.target.value})}/>
       

<ul>
      {todo.map((eachItem)=>{
        console.log(eachItem)
return <li key={eachItem.id}>
    {eachItem.name}
    <button onClick={()=>{dispatch({type:"DELETE_TASK", payload:eachItem.id})}}> delete</button>
</li>
      })}
          </ul>
    </div>
  )
}

export default Todo
