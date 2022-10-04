import React , {useState} from "react";
import {UsersDate} from "../DataBase/UsersDate";
import "./ContactCard.style.scss"
const ContactViewCard = ({search})=>{
 const [user , setUser] = useState(UsersDate);

    return(
        <div className={"ContactCard"}>
            {user.filter(filters => filters.name.toUpperCase().includes(search.toUpperCase())).map(users =>(
                <div className={"Card"} key={users.id}>
                    <div className={"ContactAvatar"}>
                        <img src={`https://avatars.dicebear.com/api/micah/:${users.id}.svg`}/>
                    </div>
                    <div className={"ContactInfo"}>
                        <div className={"Info_name"}>{users.name}</div>
                        <div className={"Info_tel"}>{users.phone}</div>
                    </div>
                </div>
            ))
            }
        </div>
    )
}


export default ContactViewCard;