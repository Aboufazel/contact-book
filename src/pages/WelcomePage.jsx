import Logo from "../assets/pics/Logo.jpg"
import "./pages.style.scss"
import NextButton from "../components/Button/NextButton";
import {useNavigate} from "react-router";

const WelcomePage = ()=>{
    const letsGo = useNavigate()

    const Go = () =>{
        letsGo("/home");
    }
    return(
        <div className={"welcomePage"}>
            <div className={"logo"}>
                <img src={Logo}/>
            </div>
            <div className={"title"}>
                <h3>Welcome to my React Project</h3>
            </div>
            <NextButton onClick={Go}/>
        </div>
    )
}


export default WelcomePage;