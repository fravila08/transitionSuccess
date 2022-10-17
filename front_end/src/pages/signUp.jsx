import axios from 'axios'
import {motion} from "framer-motion"

function SignUp() {
  function signUp(event) {
    try{
      let username=document.getElementById("userName").value;
      let email=document.getElementById("email").value;
      let password=document.getElementById("password").value;
      axios.post("sign_up",{
        name: username,
        email: email,
        password: password
      }).then((response)=>{
        window.location.href="/signIn"
      })
    }
    catch (err) {
      console.log(err)
    }
  }


  
  return (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}} 
        style={{display:"flex", justifyContent:"center", marginTop:"20vh", paddingBottom:"10vh"}}>
        <div className="signup">
          <form onSubmit={signUp}>
            <label htmlFor="username">username </label>
            <input id='userName'
              placeholder='ex: pancho'
              className="form-control"
              required />
            <br />
            <label>Email: </label>
            <input id='email'
              placeholder='ex: pancho@gmail.com'
              className="form-control"
              required />
            <br />
            <label>Password: </label>
            <input type="password"
              id='password'
              className="form-control"
              required />
            <br />
            <button type="submit">Sign Up</button>
            <p>Already have an Account?</p>
            <a href="#/signIn">LOG IN</a>
          </form>
        </div>
        </motion.div>
  )
}

export default SignUp
