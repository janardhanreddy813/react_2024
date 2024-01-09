import React, { useEffect, useRef } from 'react'

const Login = () => {
  const data = useRef()

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(data.current.value)
  }
  useEffect(() => {
    data.current.focus()
  }, [])
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input ref={data} type="text" name="" id="" />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login
