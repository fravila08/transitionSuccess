import spartan from "../assets/spartanHelmet.png"
const Choices = ({name}) =>{
    function state(string){
        if(string=== "New User"){
            window.location.href="#/signUp"
        }
        else if(string === "Existing User"){
            window.location.href="#/signIn"
        }
    }
    return(
        <button onClick={()=>state(name)} style={{backgroundColor:"gray", height:"30vw", width:"30vw", }}>
            <img src={spartan} style={{height:"5vh"}}/>
            <h1>{name}</h1>
        </button>
    )
}

export default Choices;