import React from 'react'
import { useSelector } from 'react-redux'

const Account = () => {
  const data = useSelector((state) => {
    return state
  })

  return (
    <div className="container my-2">
      <div className="row">
        <h3 className="text-primary"> Account Details</h3>
        <table className="table table-bordered ">
          <thead>
            <tr>
              <th>Balance</th>
              <th> FullName</th>
              <th> Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.user.balance}</td>
              <td>{data.user.fullName}</td>
              <td> {data.user.mobile}</td>
            </tr>
          </tbody>
        </table>
        <table className="table table-bordered ">
          <thead>
            <tr>
              <th>Type</th>
              <th> TimeStamp</th>
              <th> Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.transaction.type}</td>
              <td>{data.transaction.timeStamp}</td>
              <td> {data.transaction.amount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Account
