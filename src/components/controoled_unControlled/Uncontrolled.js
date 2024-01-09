import React, { useRef } from 'react'

const Uncontrolled = () => {
    const submitHandler=(e)=>{
      e.preventDefault()
      alert(inputRef.current.value)
    }
    const inputRef=useRef()
  return (
    <div>

        <form onSubmit={submitHandler}>
            <input type='text' placeholder='text' ref={inputRef}/>
            <input type='submit'/>
        </form>
    </div>
  )
}

export default Uncontrolled