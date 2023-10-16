import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { useState } from 'react'
import KeyIcon from '@mui/icons-material/Key';
function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onSubmitLogin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            console.log(user)
            navigate('/')
        })
        .catch((error) => {
            alert('Nie ma takiego użytkownika', error)
        })
  }


  return (
    <div className="account__wrapper">
            <div className="account_form">
            <h3>Logowanie</h3>
                <form onSubmit={(e) => onSubmitLogin(e)}>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='hasło'/>
                    <div className="form__buttons">
                        <button>
                            <KeyIcon />
                            Zaloguj
                        </button>
                        <a href="#">Zapomniałeś hasła?</a>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default Login