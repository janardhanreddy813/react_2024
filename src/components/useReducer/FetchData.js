import React, { useEffect, useReducer } from 'react'
const fetchReducer=(state,action)=>{

    switch(action.type){
        case "FETCH_DATA" : return {
            ...state,
            data:action.payload
        }
        default: return state;
    }

}

const FetchData = () => {
const initialState={

    data:[]
}

const getData= async(URL)=>{

    const res= await fetch(URL)
    const newData= await res.json()
    dispatch({type:"FETCH_DATA", payload:newData})

    console.log(newData);
}

useEffect(()=>{
    getData('https://jsonplaceholder.typicode.com/users')
},[])
   const[state,dispatch]= useReducer(fetchReducer,initialState)
  return (
    <div>{state.data.map((eachItem)=>{
        return <div key={eachItem.id}> <h4> {eachItem.name}</h4></div>
    })}</div>
  )
}

export default FetchData