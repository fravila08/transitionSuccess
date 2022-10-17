import spartan from "../assets/spartanHelmet.png"
import Card from 'react-bootstrap/Card';

const Incoming= ()=>{
    let choices1=["New User", "Existing User"]
    const state=(string)=>{
      if(string=== "New User"){
          window.location.href="#/signUp"
      }
      else if(string === "Existing User"){
          window.location.href="#/signIn"
      }
    }
    return(
        <div className='incoming' style={{width:"100%", display:"flex", justifyContent:"space-around"}}>
          {choices1.map((choice)=>{
            return(
              <Card style={{ width:'18rem'}} onClick={()=>state(choice)}>
                  <Card.Img variant="top" src={spartan} style={{width:"30vw"}}/>
                  <Card.Body>
                      <Card.Title>{choice}</Card.Title>
                  </Card.Body>
              </Card>
            )
          })}
        </div>
    )
}

export default Incoming;