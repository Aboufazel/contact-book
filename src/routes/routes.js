import { createBrowserRouter } from "react-router-dom";
import ContactsView from "../components/Layouts/ContactsView";
import ContactsAdd from "../components/Layouts/ContactsAdd";
import ContactInfo from "../components/Layouts/ContactInfo";
import {RouterProvider} from "react-router";
import {useState} from "react";
import {UsersDate} from "../components/DataBase/UsersDate";


const Root = ()=>{
    const [user , setUser] = useState(UsersDate);

    const router = createBrowserRouter(

        [
            {path: "/",
                children:[
                    {
                        index: true,
                        element: <ContactsView user={user} setUser={setUser}/>,
                    },{
                        path:"contactForm",
                        element: <ContactsAdd/>
                    },{
                        path: "contact/:contactId",
                        element: <ContactInfo/>
                    }
                ]
            },
        ])
    return(
        <RouterProvider router={router}/>
    )
}



export default Root;

