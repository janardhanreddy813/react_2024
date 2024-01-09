import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

const Count = () => {
  const data = useSelector((state) => {
    return state
  })
  console.log(data)
  const dispatch = useDispatch()
  return (
    <div>
      <h4> {data.count}</h4>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch({ type: 'INC' })
        }}
      >
        {' '}
        Increment
      </button>
      <button
        className="btn btn-danger "
        onClick={() => {
          dispatch({ type: 'DEC' })
        }}
      >
        {' '}
        Decrement
      </button>

      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch({ type: 'RESET' })
        }}
      >
        {' '}
        Reset
      </button>
    </div>
  )
}

export default Count
