import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './store'

const Users = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => {
    return state
  })
  console.log(data)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  return (
    <div>
      <div className="container">
        <h3 className="text-primary my-4"> Fecth Users Data</h3>
        <div className="row">
          {data.user.status == 'Loading' && (
            <h3 my-3 style={{ color: 'red' }}>
              {' '}
              Data Loading wait for a moment....
            </h3>
          )}

          {data.user.status == 'completed' && data.user.error == false && (
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>E-mail</th>
                  <th> Phone</th>
                </tr>
              </thead>
              <tbody>
                {data.user.users.map((usrs, index) => {
                  return (
                    <tr key={index}>
                      <td>{usrs.name}</td>
                      <td>{usrs.email}</td>
                      <td>{usrs.phone}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )}

          {data.user.status == 'error' && (
            <h4 style={{ color: 'red' }}> {data.user.error}</h4>
          )}
        </div>
      </div>
    </div>
  )
}

export default Users
