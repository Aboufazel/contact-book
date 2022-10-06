import ContactInfoCard from "../ContactCard/ContactInfoCard";
import InfoHeader from "../Header/InfoHeader";


const ContactInfo =({user , setUser})=>{
    return (
        <div>
            <InfoHeader/>
            <ContactInfoCard user={user} setUser={setUser}/>
        </div>
    )
}


export default ContactInfo;