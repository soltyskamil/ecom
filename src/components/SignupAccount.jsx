import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { useState } from 'react'
import KeyIcon from '@mui/icons-material/Key';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
function Signup() {

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
  const [password, setPassword] = useState({typed: '', confirmed: ''})
  
  const onSubmitSignup = async (e) => {
    e.preventDefault()
    if(password.typed !== password.confirmed){
        alert('Hasło różni się')
        return
    }else{
       await createUserWithEmailAndPassword(auth, email, password.confirmed)
        .then((userCredentials) => {
            //Zalogowany 
            const user = userCredentials.user;
            console.log(user)
            alert('Gratulacje zostałeś zarejestrowany!')
            navigate('/')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, errorMessage)
        }) 
    }
  }
  return (
    <>
       
        <div className="account__wrapper">
            <div className="account_form">
            <h3>Rejestracja</h3>
                <form onSubmit={(e) => onSubmitSignup(e)}>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required/>
                    <input type="password" value={password.typed} onChange={(e) => setPassword({typed: e.target.value, confirmed: password.confirmed})} placeholder='hasło' required/>
                    <input type="password" value={password.confirmed} onChange={(e) => setPassword({typed: password.typed, confirmed: e.target.value})} placeholder='powtórz hasło' required/>
                    {/* <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='hasło'/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='powtórz hasło'/> */}
                    <div className="form__buttons" data-sign>
                        <button>
                            <PersonAddIcon />
                            Stwórz konto
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Signup