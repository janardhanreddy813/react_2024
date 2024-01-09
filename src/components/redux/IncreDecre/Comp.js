import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Comp = () => {
  const data = useSelector((state) => {
    return state
  })
  console.log(data.count)

  const dispatch = useDispatch()
  return (
    <div>
      <h4> {data.count}</h4>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch({ type: 'INC' })
          }}
        >
          {' '}
          Increment
        </button>
      </div>
      <div>
        <button
          className="btn btn-danger"
          onClick={() => {
            dispatch({ type: 'DEC' })
          }}
        >
          {' '}
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Comp
