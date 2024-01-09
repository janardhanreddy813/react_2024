import React, { useState } from 'react';


const Hoc = () => {
  
  return (
    
    <div>
    <h3> HOC</h3>
    <HocRed cmp={Counter}/>
    <HocBlue cmp={Counter}/>
    </div>
  )
}

const HocRed=(props)=>{
  return (<h4 style={{backgroundColor:"red", padding:"6px"}}> <props.cmp/> </h4>)
}

const HocBlue=(props)=>{
  return (
    <h4 style={{ backgroundColor: "blue", padding: "6px" }}> <props.cmp/></h4>
  )
}

const Counter =()=>{
  const [count, setCount] = useState(0);
    return (
        <> 
        <h4>{count}</h4>
        <button onClick={()=>{ setCount(count+1)}}> Increment </button>
        </>
    )
}

export default Hoc