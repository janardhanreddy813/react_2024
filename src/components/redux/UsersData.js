import React from 'react'
import { useSelector } from 'react-redux'

const UsersData = () => {
  let data = useSelector((state) => {
    return state
  })

  return (
    <div className="container">
      <div className="row">
        <h4 className="text-primary"> Account Details</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Balance</th>
              <th>FullName</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.balance} </td>
              <td>{data.fullName} </td>

              <td>{data.phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UsersData
