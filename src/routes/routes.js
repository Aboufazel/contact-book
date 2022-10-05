import { createBrowserRouter } from "react-router-dom";
import ContactsView from "../components/Layouts/ContactsView";
import ContactsAdd from "../components/Layouts/ContactsAdd";


const router = createBrowserRouter([
    {path: "/",
        children:[
            {
                index: true,
                element: <ContactsView />,
            },{
             path:"contactForm",
             element: <ContactsAdd/>
            }
        ]
    },
])


export default router;