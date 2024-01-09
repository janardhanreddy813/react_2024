import React, { useRef } from 'react'

const DomElements = () => {
   const ele= useRef()
   console.log(ele);
   console.log(ele.current);
   
   
   

  return (
    <div>

          <h1 ref={ele} onClick={() => { ele.current.value = "hello" }}> heading one</h1>
       
    </div>
  )
}

export default DomElements