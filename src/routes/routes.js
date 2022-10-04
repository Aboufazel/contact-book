import { createBrowserRouter } from "react-router-dom";
import ContactsView from "../components/Layouts/ContactsView";


const router = createBrowserRouter([
    {path: "/",
        children:[
            {
                index: true,
                element: <ContactsView />,
            },
        ]
    },
])


export default router;