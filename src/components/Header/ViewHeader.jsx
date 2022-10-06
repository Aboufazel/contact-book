import Container from "../Container/Container";
import "./Header.style.scss"
import AddButton from "../Button/AddButton";
import SearchBox from "../SearchBox/SearchBox";
import {Link} from "react-router-dom";

const ViewHeader = ({manageSearch , title})=>{
    return(
       <Container>
          <div className={"ViewHeader"}>
               <div className={"ViewHeader__top"}>
                   <Link to={"contactForm"}>
                       <AddButton/>
                   </Link>
                   <h3>{title}</h3>
               </div>
               <div className={"ViewHeader__Bottom"}>
                   <SearchBox manageSearch={manageSearch}/>
               </div>
              <div className={"EndHeader"}/>
          </div>
       </Container>
    );
}

export default ViewHeader;