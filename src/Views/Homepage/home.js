import { useState } from "react"
import { useNavigate } from "react-router-dom";
const HomepageContainer = () => {
    const [youShouldNotPass, setYouShouldNotPass] = useState("NOPE")
    const [tryAgain, setTryAgain] = useState(false)
    const navigate = useNavigate()

    const mellon = () => {
        if (youShouldNotPass === "NOPE") {
            setTryAgain(true)
            // window.location.href='./login'
            navigate("./login")
        }
    }

     return (
        <div className="home-container">
            <div className="home-text">
                <div className="welcom-sentence">Test technique alternant Flying For You</div>
                <button  style={{ backgroundColor: "#60EED2", border: "none", padding: "10px 30px", borderRadius: 20, cursor: "pointer" }} onClick={() => mellon()}>{"Commencer le test"} </button>
                {/* {tryAgain && <div>Tu ne pensais pas que ce serait si simple ? ...</div>} */}
            </div>
        </div>
     )
}

export default HomepageContainer