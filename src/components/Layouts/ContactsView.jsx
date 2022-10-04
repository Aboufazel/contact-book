import Container from "../Container/Container";
import ViewHeader from "../Header/ViewHeader";
import ContactViewCard from "../ContactCard/ContactViewCard";


const ContactsView= ()=>{
    return(
        <Container>
            <ViewHeader/>
            <ContactViewCard/>
        </Container>
    )
}

export default ContactsView;