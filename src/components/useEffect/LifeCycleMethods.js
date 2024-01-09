import React, { useEffect, useState } from 'react'

const LifeCycleMethods = () => {
    const[count,setCount]=useState(0);
    const [toggle,setToggle]=useState(true)
    const newToggle=()=>{
        setToggle(!toggle)
    }
    const[windowWidth,setWindowWidth]=useState(window.innerWidth)
    useEffect(()=>{
console.log("Hai");
const resizeHandler= window.addEventListener('resize',()=>{

    setWindowWidth(window.innerWidth)
})
console.log(windowWidth)
 return ()=>{
window.removeEventListener('resize',resizeHandler)
console.log("removed")
    }
        })
  return (
    <div>
      <h4> Count : {count}</h4>
        <button onClick={()=>{setCount(count+1)}}> +</button>
      <h5 onClick={newToggle}> {toggle ? "Open" : "Close"}</h5>
      <h3> {windowWidth}</h3>
    </div>
  )
}

export default LifeCycleMethods
