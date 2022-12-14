import {AnimatePresence } from "framer-motion"
import {Routes, Route, useLocation} from "react-router-dom";
import Incoming from "../pages/incoming";
import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";
import DecisionMap from "../pages/decisionMap";

function AnimatedRoutes({user, setModalShow, setShowCascade, setNeedRelease, setShowThunder, setShowRainbow, setShowVolcano, setReleaseShow, setShowEarth}){
    const location=useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname} >
                <Route path='/' element={<Incoming />} />
                <Route path='/signUp' element={<SignUp />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/decisionMap" element={<DecisionMap />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;