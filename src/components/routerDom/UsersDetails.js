import React from 'react';
import {useParams} from 'react-router-dom';
import Users from './Users';

const UsersDetails = () => {
    const {usersId}=useParams()
    const usersDetailsData= Users.newData.find((eachItem)=> eachItem.id === usersId)
   console.log(usersDetailsData);
  return (
    <div>
      <h4> {usersDetailsData.name}</h4>
      <p> {usersDetailsData.email}</p>
      <p> {usersDetailsData.phone}</p>
    </div>
  )
}

export default UsersDetails
