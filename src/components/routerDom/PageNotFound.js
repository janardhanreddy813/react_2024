import React from 'react';
import {useNavigate} from 'react-router-dom'

const PageNotFound = () => {
    const navigate=useNavigate()
  return (
    <div> 
    <h5 style={{color:"red"}}> Page not found</h5>
    <button onClick={()=>{ navigate('/')}}>  Back to home</button>
    </div>
  )
}

export default PageNotFound