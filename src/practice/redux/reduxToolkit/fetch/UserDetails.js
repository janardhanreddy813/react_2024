import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UsersFetch } from './store'

const UserDetails = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => {
    return state
  })

  useEffect(() => {
    dispatch(UsersFetch())
  }, [])
  console.log(data)
  return (
    <div>
      {data.users.users.map((item, index) => {
        return (
          <div key={index}>
            <h4> {item.name}</h4>
            <p> {item.email}</p>
          </div>
        )
      })}
    </div>
  )
}

export default UserDetails
