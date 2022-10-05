
import "./Button.style.scss"
import {faContactBook} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const BackButton = ()=>{
    return(
        <div className={"BackButton"}>
            <FontAwesomeIcon icon={faContactBook} />
        </div>
    )
}

export default BackButton;