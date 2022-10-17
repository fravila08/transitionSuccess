import Choices from "../components/choices"
import { useState, useEffect } from "react"
import axios from "axios"


const DecisionMap = ()=>{
    const [answer, setAnswer]=useState(0)

    const getMyPicked=async()=>{
        let myPick = await axios.get("/handleChange")
        // console.log(myPick.data['answer'])
        setAnswer(myPick.data['answer'])
    }

    useEffect(()=>{
        getMyPicked()
    },[])
    
    return(
        <div style={{display:"flex", justifyContent:"space-around", maxWidth:'100vw', flexWrap:"wrap"}}>
            {[
                [1,["Married","Are you currently or recently married and would like to see what resources are available for your spouse and family during your transition?"]],
                [2,["GI Bill", "Are you interested in using your GI bill and would like to find the information?"]],
                [3,["VA Homeloan", "This will describe the process for applying for you VA Homeloan and even cover a quick run down on how purchasing a home will work. (please note that this varies depending on state)"]],
                [4,["VA Health Claims", "This will help you meneuver through filing your VA Health Claims."]],
                [5,["TRS", "This will hold a checklist for the items needed to attend TRS and cover how to schedule your TRS date."]],
                [6,["Skillsbridege", "What is Skillsbridge? What can it do for you? and how can you sign up?"]],
            ].map((question)=>{
                return(
                    <Choices name={question} answer={answer} />
                )
            })}
        </div>
    )
}

export default DecisionMap;