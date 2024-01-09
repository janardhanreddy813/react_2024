import React, { useEffect, useState } from 'react';
import '../useEffect/FetchDrinks.css'

const FetchAlbum = (apiUrl) => {
    const[photosData,setPhotosData]=useState([])
    const[search,setSearch]=useState('')
    const url="https://jsonplaceholder.typicode.com/photos";
    const fetchData=async(apiUrl)=>{
        const res=await fetch(apiUrl);
        const data=await res.json()
        setPhotosData(data)
        console.log(photosData);
    }

    useEffect(()=>{
        fetchData(url)
    })
  return (
    <div>
        <form>
            <input type="text" name="search" id="search" value={search}  
            onChange={(e)=> setSearch(e.target.value)}
            placeholder='search here' />
        </form>
     
        <ul className='albums'>
            {photosData.filter((photo)=>photo.title.toLowerCase().includes(search.toLowerCase())).map((eachItem)=>{
                const{id,title,thumbnailUrl}=eachItem;
        return  <li key={id}> 
<h5> {id}</h5>
<img src={thumbnailUrl} alt='thumbnailUrl'/>
<h6>{title} </h6>

        </li>


      })}
        </ul>
      
          </div>
  )
}

export default FetchAlbum
