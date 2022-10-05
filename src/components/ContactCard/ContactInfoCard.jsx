


const ContactInfoCard = ({user , setUser})=>{

    return(
        <div>
            <div>
                <img src={`https://avatars.dicebear.com/api/micah/:${user.id}.svg`}/>
            </div>
        </div>
    )
}

export default ContactInfoCard;