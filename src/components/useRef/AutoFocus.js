import React, { useRef,useEffect } from 'react'

const AutoFocus = () => {
    const data=useRef();
    const submitHandler=(e)=>{
    e.preventDefault()
        console.log(data.current.value);
       
    }
    useEffect(()=>{
        data.current.focus()
    },[])
    
  return (
    <form onSubmit={submitHandler}>

        <input ref={data} type="text" name="text" placeholder='text' />

        <input type="submit" value="sumbit" />
    </form>
  )
}

export default AutoFocus