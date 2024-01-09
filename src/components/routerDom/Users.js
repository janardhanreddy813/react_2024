import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';

const Users = () => {
    const fetchData=async(URL)=>{
const res= await fetch(URL)
const data= await res.json();
setNewData(data)
console.log(data);
    }

    useEffect(()=>{
        fetchData('https://jsonplaceholder.typicode.com/users')

    },[])

    const[newData,setNewData]=useState([]);

  return (
    <div>
      {newData.map((eachItem)=>{
        return <Link to={`/users/${eachItem.id}`} key={eachItem.id}>
            <h5> {eachItem.name}</h5>
        </Link>
      })}
    </div>
  )
}

export default Users
