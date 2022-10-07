import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faForward} from "@fortawesome/free-solid-svg-icons";
import "./Button.style.scss"

const NextButton = ({onClick})=>{

    return(
        <div className={"NextButton"} role={"button"} onClick={onClick}>
            <div>LetsGo</div>
            <FontAwesomeIcon icon={faForward}/>
        </div>
    )
}

export default NextButton;