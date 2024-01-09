import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from './actions'

const UsersComp = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => {
    return state
  })
  const usersData = async (dispatch, getState) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const Udata = await res.json()
    dispatch(getData(Udata))
  }

  useEffect(() => {
    dispatch(usersData)
  }, [])

  console.log(data)

  return (
    <div>
      {data.users.map((item, index) => {
        return (
          <div key={index}>
            <h4> {item.name}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default UsersComp
