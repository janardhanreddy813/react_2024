import React from 'react'

const Test = (props) => {
  return (
    <div>

          <input type='text' placeholder='text' onChange={props.changeHandler}/>
    </div>
  )
}

export default Test