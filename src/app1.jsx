import { useState } from 'react'
import './App.css'

function App() {

let [userData, setUserData] = useState({
  username: '',
  password: ''
})

let onSubmit = (e) => {
  e.preventDefault()
  console.log(userData);
}

let onChange = (e) => {
  let { name, value} = e.target
setUserData({...userData, [name]: value})
}
  return (
    <>
      <form action="">
        <label htmlFor="">Username</label>
        <input name='username' type="text" placeholder='username'
        onChange={onChange}
        />
        <label htmlFor="">Password</label>
        <input name='password' type="password" placeholder='password'
        onChange={onChange}
        />
        <button onClick={onSubmit} type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
