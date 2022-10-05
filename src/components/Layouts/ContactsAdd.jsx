import Container from "../Container/Container";
import AddForm from "../AddForm/AddForm";
import InfoHeader from "../Header/InfoHeader";


const ContactsAdd = ({user , setUser})=>{
    return(
        <Container>
            <InfoHeader/>
            <AddForm user={user} setUser={setUser}/>
        </Container>
    )
}

export default ContactsAdd;