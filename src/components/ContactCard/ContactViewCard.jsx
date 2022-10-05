import React , {useState} from "react";
import {UsersDate} from "../DataBase/UsersDate";
import "./ContactCard.style.scss"
import {Link} from "react-router-dom";
const ContactViewCard = ({search , user , setUser})=>{




    return(
           <div className={"ContactCard"}>
               {user.filter(filters => filters.name.toUpperCase().includes(search.toUpperCase())).map(users =>(
                  <Link to={`/contact/${users.id}`} className={"LinkCard"}>
                      <div className={"Card"} key={users.id}>
                          <div className={"ContactAvatar"}>
                              <img src={`https://avatars.dicebear.com/api/micah/:${users.id}.svg`}/>
                          </div>
                          <div className={"ContactInfo"}>
                              <div className={"Info_name"}>{users.name}</div>
                              <div className={"Info_tel"}>{users.phone}</div>
                          </div>
                      </div>
                  </Link>
               ))
               }
           </div>
    )
}


export default ContactViewCard;