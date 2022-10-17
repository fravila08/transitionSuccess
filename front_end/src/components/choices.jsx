import spartan from "../assets/spartanHelmet.png"
import Card from 'react-bootstrap/Card';
import axios from "axios"

const Choices = ({name, answer}) =>{
    if (answer !== 0){
        for (let i in answer){
            document.getElementById(answer[i]).style.backgroundColor = "yellow"
            document.getElementById(answer[i]).style.color="black"
        }
    }

    const changeColor=(id)=>{
        const address={
            1:"married",
            2:"gi_bill",
            3:"va_homeloan",
            4:"va_health_claims",
            5:"trs",
            6:"skillsbridge"
        }
        if (document.getElementById(id).style.backgroundColor !== "yellow"){
            document.getElementById(id).style.backgroundColor="yellow"
            document.getElementById(id).style.color="black"
            axios.put("/handleChange", {
                toChange:address[id],
                value:true
            }).then((response)=>{
                console.log(response)
            })
        }
        else{
            document.getElementById(id).style.backgroundColor = "darkgrey"
            document.getElementById(id).style.color="white"
            axios.put("/handleChange", {
                toChange: address[id],
                value:false
            }).then((response)=>{
                console.log(response)
            })
        }
    }
    return(
        <Card onClick={()=>changeColor(name[0])} id={name[0]} style={{backgroundColor:"dardgrey", marginBottom:"1vh", width:'30vw', border:'white solid 5px', textAlign:"center"}}>
            <Card.Img variant="top" src={spartan} style={{width:"30vw"}}/>
            <Card.Body>
                <Card.Title>{name[1][0]}</Card.Title>
                <Card.Text>
                    {name[1][1]}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Choices;