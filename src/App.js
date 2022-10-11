
import './App.css';
import Root from "./routes/routes";
import ContactProvider from "./Context/contactAction/contactProvider";
function App() {
  return (
       <ContactProvider>
         <Root/>
       </ContactProvider>
  );
}

export default App;
