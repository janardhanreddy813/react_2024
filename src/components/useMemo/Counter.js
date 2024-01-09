import React, { useState } from 'react'

const Counter = () => {
    const[countOne,setCountOne]=useState(0);
    const[countTwo,setCountTwo]=useState(0)
    const countOneInc=()=>{
    for (let index = 0; index < 2000000000; index++) {
      
        
    }
         setCountOne(countOne+1)
    }
    const countTwoInc=()=>{
        setCountTwo(countTwo+1)
    }
  return (

    <div>

<h4> { countOne}</h4>
<button className='btn btn-danger' onClick={countOneInc}> click me </button>
<h4> { countTwo}</h4>

          <button className='btn btn-primary' onClick={countTwoInc}> click me </button>
    </div>


  )
}

export default Counter