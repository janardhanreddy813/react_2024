import React, { useContext } from 'react'
import { store } from './Parent'

const Child = () => {
   const data= useContext(store)
  return (
    <div>
      <h4> Name: {data.name}</h4>
      <h4> Age: {data.age}</h4>
      <h4> Location: {data.location}</h4>
    </div>
  )
}

export default Child
