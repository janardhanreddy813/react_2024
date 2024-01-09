import React, { useState } from 'react'

const Hoc = () => {
  return (
    <div>
      <HocRed cmp={Counter} />
      <HocBlue cmp={Counter} />
    </div>
  )
}

const HocRed = (props) => {
  return (
    <h4 style={{ backgroundColor: 'red', padding: '20px', color: 'white' }}>
      {' '}
      <props.cmp />
    </h4>
  )
}

const HocBlue = (props) => {
  return (
    <h4 style={{ backgroundColor: 'blue', padding: '20px', color: 'white' }}>
      {' '}
      <props.cmp />
    </h4>
  )
}

const Counter = () => {
  const [data, SetData] = useState(0)
  return (
    <div>
      <h4> counter: {data}</h4>
      <button onClick={() => SetData(data + 1)}>Click</button>
    </div>
  )
}

export default Hoc
