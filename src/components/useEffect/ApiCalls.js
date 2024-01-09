import React, { useEffect, useState } from 'react'

const ApiCalls = () => {
    const[apiData,setApiData]=useState([]);
    const[loader,setLoader]=useState(false);
    const[isError,setIsError]=useState({status:false,msg:""})
const fetchData=async()=>{
    setLoader(true)
    setIsError({status:false,msg:""})
    try {
    const res= await fetch('https://jsonplaceholder.typicode.com/users');
    const data= await res.json()
   // console.log(data);
   setApiData(data)
   setLoader(false)
   setIsError({status:false,msg:""})
   if(res.status === 404){
    throw new Error('Data not found')
   }
    } catch (error) {
        setLoader(false)
        setIsError({status:true, msg:error.message||  " something went wrong plz try later"})
    }
  
}
useEffect(()=>{
    fetchData();
},[])
    if(loader){

        return <h4> Loading...</h4>
    }
    if(isError.status){
        return <div>
            <h4 style={{color:"red"}}> { isError.msg}</h4>
        </div>
    }
  return (
    <div>
        <ul>
      {apiData.map((eachItem)=>{
        const{id,name,email}=eachItem;
        return <div key={id}> <li>
              {id}
        </li>
        <li>{name} </li>
        <li> {email}</li>
        </div>
      })}
      </ul>
    </div>
  )
}

export default ApiCalls
