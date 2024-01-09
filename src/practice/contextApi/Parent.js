import React,{createContext} from 'react';
import Child from './Child';

export const store=createContext();


const Parent = () => {
    const data={
        name:"vijay",
        age:27,
        location:"Hyderbad"
    }
  return (
    <div>
     <store.Provider value={data}>
<Child/>

     </store.Provider>
    </div>
  )
}

export default Parent
