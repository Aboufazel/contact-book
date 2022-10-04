import Container from "../Container/Container";
import ViewHeader from "../Header/ViewHeader";
import ContactViewCard from "../ContactCard/ContactViewCard";
import {useState} from "react";


const ContactsView= ()=>{
    const [search , setSearch] = useState('');

    const manageSearch = (e)=>{
        setSearch(e.target.value)
    }
    return(
        <Container>
            <ViewHeader manageSearch={manageSearch}/>
            <ContactViewCard search={search}/>
        </Container>
    )
}

export default ContactsView;