import React, { useState } from 'react'
import Test from './Test';

const ExpOne = () => {
    const[data,setData]=useState('') ;
const changeHandler=(e)=>{

    setData(e.target.value)

}

  return (
    <div>


<h6>{data}</h6>
        <input type='text' placeholder='text' onChange={changeHandler}/>
        <div> <br/></div>
        <Test changeHandler={changeHandler}/>
    </div>
  )
}

export default ExpOne