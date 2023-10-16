import React from 'react'
import '../styles/account/account.css'
import Login from './LoginAccount'
import Signup from './SignupAccount'
function Account() {
  return (
    <div className='account'>
      <Login />
      <Signup />
    </div>
  )
}

export default Account