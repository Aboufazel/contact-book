
import './App.css';
import Root from "./routes/routes";
import {store} from './Redux/Store';
import { Provider } from 'react-redux';
function App() {
  return (

       <Provider store = {store}>
         <Root/>
       </Provider>
  );
}

export default App;
