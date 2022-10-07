import Logo from "../assets/pics/Logo.jpg"
import "./pages.style.scss"
import NextButton from "../components/Button/NextButton";
const WelcomePage = ()=>{
    return(
        <div className={"welcomePage"}>
            <div className={"logo"}>
                <img src={Logo}/>
            </div>
            <div className={"title"}>
                <h3>Welcome to my React Project</h3>
            </div>
            <NextButton/>
        </div>
    )
}


export default WelcomePage;