import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deposit, withdraw, nameUpdate, updatePhone } from './action'

const Form = () => {
  const dispatch = useDispatch()
  const [amount, setAmount] = useState('')
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  return (
    <div>
      <div className="my-4">
        <div className="container">
          <h4 className="text-danger"> User Form</h4>
          <div className="row">
            <div className="col-3">
              <input
                className="form-control"
                type="number"
                value={amount}
                placeholder="Enter amount"
                onChange={(e) => {
                  let data = e.target.value
                  setAmount(data)
                }}
              />
            </div>
            <div className="col-1">
              <button
                className="btn btn-primary"
                onClick={() => {
                  dispatch(deposit(amount))
                  setAmount('')
                }}
              >
                {' '}
                Deposit
              </button>
            </div>
            <div className="col-1">
              <button
                className="btn btn-danger"
                onClick={() => {
                  dispatch(withdraw(amount))
                  setAmount('')
                }}
              >
                {' '}
                Withdraw
              </button>
            </div>
            <div>
              <br />
            </div>
            <div className="col-3">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Full Name"
                value={fullName}
                onChange={(e) => {
                  let data = e.target.value
                  setFullName(data)
                }}
              />
            </div>
            <div className="col-2">
              <button
                className="btn btn-primary"
                onClick={() => {
                  dispatch(nameUpdate(fullName))
                  setFullName('')
                }}
              >
                {' '}
                Update Name
              </button>
            </div>
            <div>
              <br />
            </div>
            <div className="col-3">
              <input
                className="form-control"
                type="number"
                value={phone}
                placeholder="Enter your Phone"
                onChange={(e) => {
                  let data = e.target.value
                  setPhone(data)
                }}
              />
            </div>
            <div className="col-2">
              <button
                className="btn btn-primary"
                onClick={() => {
                  dispatch(updatePhone(phone))
                  setPhone('')
                }}
              >
                {' '}
                Update Phone
              </button>
            </div>
            <div>
              {' '}
              <br />
            </div>
            <div className="col-1">
              <button
                className="btn btn-danger"
                onClick={() => {
                  dispatch({ type: 'reset' })
                }}
              >
                {' '}
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
