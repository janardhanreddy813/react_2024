import React, { useReducer } from 'react'
const countReducer = (state, action) => {
    switch (action.type) {
        case 'INC': return {

            count:state.count+1

        }
        case 'DEC': return {

            count: state.count - 1

        }

        default : return state
    }
}
const Count = () => {
    const initialState={
        count:0
    }
 const[state,dispatch]=   useReducer(countReducer,initialState);
 const incHandler=()=>{
    dispatch({type:"INC"})
 }
 const decHandler=()=>{
    dispatch({type:"DEC"})
 }
  return (
    <div>
    
          <h4>  Counter: {state.count}</h4> 
    <hr/>
    <button className='btn btn-primary mx-2' onClick={incHandler}> Increment</button>
    <button className='btn btn-danger' onClick={decHandler}> Decrement</button>

    
    </div>
  )
}

export default Count