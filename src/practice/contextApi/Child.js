import React,{useContext} from 'react';
import {store} from './Parent'

const Child = () => {

    const data=useContext(store)
  return (
    <div>
      <h4> {data.name}</h4>
      <p> {data.location}</p>
      <h6> {data.age}</h6>
    </div>
  )
}

export default Child
