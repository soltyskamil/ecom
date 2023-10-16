import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './Main'
import Basket from './Basket'
import Account from './Account'
import Signup from './SignupAccount'
import Login from './LoginAccount'
import Wishlist from './Wishlist'
function Page() {
  return (
    <Routes>
        <Route path='/' exact element={<Main />}/>
        <Route path='/basket' element={<Basket />} />
        <Route path='/account'  element={<Account />} />
        <Route path='/wishlist' element={<Wishlist />} />
    </Routes>
  )
}

export default Page