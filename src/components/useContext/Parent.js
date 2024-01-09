import React, { createContext } from 'react';
import Child from './Child';
export const store= createContext();

const Parent = () => {
  const data = {
    name: "vijay",
    age: 29,
    location: "tirupathi"
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
