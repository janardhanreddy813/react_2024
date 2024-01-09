import React, { useMemo, useState } from 'react';

const Performance = () => {

    const[counterOne,setCounterOne]=useState(0);
    const[counterTwo,setCounterTewo]=useState(0);

    const isEven =  useMemo(()=>{
        for (let index = 0; index < 2000000000; index++) {

        }
        return counterOne % 2 === 0;
    
    },[counterOne])
 
       

  return (
    <div>

      
     <div>   <button className='btn btn-primary my-2' onClick={()=>{ setCounterOne(counterOne+1)}}>
       CounterOne - {counterOne}</button>
      { isEven ? "even" :"odd"}
          </div>
        <button className='btn btn-danger' onClick={()=>{ setCounterTewo(counterTwo+1)}}>
           CounterTwo - {counterTwo}</button>
    </div>


  )
}

export default Performance;