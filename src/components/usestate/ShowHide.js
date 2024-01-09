import React, { useState } from 'react'

const ShowHide = () => {
  const[data,setData]=useState(false)
  const clickHandler=()=>{
setData(!data)
  }
  return (
    <div>
     <center>
      <button onClick={clickHandler}> {data ? "HIDE" : "SHOW"}</button>
      {data &&( <div> 
       The markup syntax you've seen above is called JSX. It is optional, but most React projects use 
        JSX for its convenience. All of the tools we recommend for local development support JSX out of
         the box.


     </div>
    )}
      
     </center> 
    </div>
  )
}

export default ShowHide
