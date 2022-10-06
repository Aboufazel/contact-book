import "./Header.style.scss"
import Container from "../Container/Container";
import {Link} from "react-router-dom";
import BackButton from "../Button/Backbutton";

const InfoHeader = () => {
    return (
        <Container>
            <div className={"Info"}>
                <div className={"backIcon"}>
                    <div className={"Link"}>
                        <Link to={"/"}>
                            <BackButton/>
                        </Link>
                    </div>

                </div>
            </div>
        </Container>
    )
}


export default InfoHeader