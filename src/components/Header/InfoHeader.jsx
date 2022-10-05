import Container from "../Container/Container";
import BackButton from "../Button/Backbutton";
import {Link} from "react-router-dom";
import "./Header.style.scss"


const InfoHeader = ()=>{
    return(
         <Container>
             <div className={"InfoHeader"}>
                 <div className={"title"}>
                     Add Contacts
                 </div>
                 <div className={"backIcon"}>
                     <Link to={"/"}>
                         <BackButton/>
                     </Link>
                 </div>
             </div>
         </Container>
    )
}

export default InfoHeader;