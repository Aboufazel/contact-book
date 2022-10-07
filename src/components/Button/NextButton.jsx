import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faForward} from "@fortawesome/free-solid-svg-icons";
import "./Button.style.scss"

const NextButton = ()=>{

    return(
        <div className={"NextButton"}>
            <div>LetsGo</div>
            <FontAwesomeIcon icon={faForward}/>
        </div>
    )
}

export default NextButton;