import React, { useEffect, useState } from 'react';
import '../useEffect/FetchDrinks.css'

const FetchDrinks = () => {
   const url="https://www.thecocktaildb.com/api/json/v1/1/search.php?s="; 
const[search,setSearch]=useState('')
   const[drinksData,setDrinksData]=useState([])
   const[loading,setLoading]=useState(false)
   //const[isError,setIsError]=useState({status:false,msg:""})
    const fetchData=async(apiUrl)=>{
setLoading(true)
//setIsError({status:false, msg:""})
        try {
            const res= await fetch(apiUrl);
const {drinks}=await res.json()
  setDrinksData(drinks)
  setLoading(false)
  //setIsError({status:false, msg:""})
        } catch (error) {
            setLoading(false)
         //   setIsError({status:true, msg:"something went wrong plz try later"})
        }
    }
    useEffect(()=>{
        const correctUrl=`${url}${search}`
        fetchData(correctUrl)
    },[search])
    console.log(search);

    
  return (

    <div>
     <h4>  count: {drinksData.length}</h4>

     <div>
        <form>
            <input type="text" name="search" id="search" value={search} 
            onChange={(e)=>setSearch(e.target.value)}
            placeholder='search drinks' />
        </form>
     </div>
      <hr/>
     {loading ? <h4> loading...</h4> : null}
      <ul className='drinks'>
       
       
        {drinksData.map((eachItem)=>{
            const{idDrink, strDrink,strDrinkThumb}=eachItem;
            return <li key={idDrink}>
                <h4> {idDrink}</h4>
                <img src={strDrinkThumb} alt={"strDrink"}/>
                <h6> { strDrink}</h6>
                
            </li>
        })}
     </ul>
    </div>
  )
}

export default FetchDrinks
