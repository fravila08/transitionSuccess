import Choices from "../components/choices"

const Incoming= ()=>{
    let choices1=["New User", "Existing User"]
    return(
        <div className='body' style={{width:"100%", display:"flex", justifyContent:"space-around"}}>
          {choices1.map((choice)=>{
            return(
              <Choices name={choice} />
            )
          })}
        </div>
    )
}

export default Incoming;