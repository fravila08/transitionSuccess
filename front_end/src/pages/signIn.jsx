import axios from 'axios'
import {motion} from "framer-motion"

function SignIn() {
  function signIn(event) {
    
  }
  return (
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}  
      style={{display:"flex", justifyContent:"center", marginTop:"20vh", paddingBottom:"10vh"}}>
        <div className="signup">
          <form onSubmit={signIn}>
            <label htmlFor="email">Email</label>
            <input id='emailSignIn'
              placeholder='Email'
              className="form-control"
              required />
            <br />
            <label htmlFor="password">Password</label>
            <input id='passwordSignIn'
              type='password'
              placeholder='Password'
              className="form-control" required />
            <br />
            <button type="submit">Sign In</button>
            <p>Don't have an account?</p>
            <a href="#/SignUp">Create New Account</a>
          </form>
        </div>
      </motion.div>
  )
}

export default SignIn;
