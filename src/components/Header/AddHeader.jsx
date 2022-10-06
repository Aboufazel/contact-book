import Container from "../Container/Container";
import BackButton from "../Button/Backbutton";
import {Link} from "react-router-dom";
import "./Header.style.scss"


const AddHeader = ({title})=>{
    return(
         <Container>
             <div className={"InfoHeader"}>
                 <div className={"title"}>
                     {title}
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

export default AddHeader;