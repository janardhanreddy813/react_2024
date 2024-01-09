import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  mobileUpdate,
  nameUpdate,
  UserWithdraw,
  UserDeposit,
  UserReset,
  
} from '../reduxToolkit/store'
import { addTransaction } from '../reduxToolkit/store'

const Form = () => {
  const dispatch = useDispatch()
  const [amount, setAmount] = useState('')
  const [fullName, setFullName] = useState('')
  const [mobile, setMobile] = useState()
  return (
    <div className="container mt-4">
      <div className="row my-2">
        <div className="col-3">
          <input
            className="form-control"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
        <div className="col-1">
          <button
            className="btn btn-primary"
            onClick={() => {
              dispatch(UserDeposit(amount));
              dispatch(addTransaction(
                {
                  timeStamp:new Date(),
                  type:'debit',
                  amount:amount
              
              }))
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
            accordion
            onClick={() => {
              dispatch(UserWithdraw(amount))
              dispatch(addTransaction(
                {
                  timeStamp:new Date(),
                  type:'credit',
                  amount:amount
                }
              ))

              setAmount('')
            }}
          >
            {' '}
            WithDraw
          </button>
        </div>
      </div>
      <div className="row my-2 ">
        <div className="col-3">
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="form-control"
            placeholder="Enter your name"
          />
        </div>
        <div className="col-1">
          <button
            className="btn btn-primary"
            onClick={() => {
              dispatch(nameUpdate(fullName))
              setFullName('')
            }}
          >
            {' '}
            Update
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <input
            type="number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="form-control"
            placeholder="Enter phone number"
          />
        </div>
        <div className="col-1">
          <button
            className="btn btn-primary"
            onClick={() => {
              dispatch(mobileUpdate(mobile))
              setMobile('')
            }}
          >
            {' '}
            Update{' '}
          </button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-1">
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(UserReset())
            }}
          >
            {' '}
            Reset{' '}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Form
