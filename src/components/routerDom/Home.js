import React from 'react';
import {useNavigate} from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate();
  return (
    <div>
    <h4> This Is Home page</h4>
    <button onClick={()=>{ navigate('/success')}}> Success Page </button>
    
    
    </div>
  )
}

export default Home