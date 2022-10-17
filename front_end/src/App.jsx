import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import NavBar from './components/navbar'
import getCookie from './components/token'
import AnimatedRoutes from './components/animatedRoutes'
import {HashRouter as Router} from "react-router-dom";

const csrftoken = getCookie('csrftoken');
axios.defaults.headers.common['X-CSRFToken']= csrftoken

function App() {
  const [user, setUser] = useState(null)
  
  function signOut(){
    event.preventDefault()
    axios.post('/sign_out').then((respone)=>{
      window.location.href=""
    })
  }

  async function curr_user(){
    try{
      const response = await axios.get('curr_user')
      const user = response.data && response.data[0] && response.data[0].fields
      setUser(user)
    }
    catch{
      console.log(user)
    }
  }

  useEffect(()=>{
    curr_user()
  },[])
  
  return (
    <div className="App">
      {user && <h1>{user.name}</h1>}
      <div className='navHolder'>
        {user ? <NavBar /> : <button><a href='#/signUp'>Sign Up</a></button>}
        <Router>
          <AnimatedRoutes/>
        </Router>
      </div>
    </div>
  )
}

export default App
