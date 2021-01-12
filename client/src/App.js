import './App.css';
import {applyMiddleware, compose, createStore} from 'redux'
import { roodReducer } from './Reduxs/roodReducer';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
//import Menu from './pages/Menu';
import Navbar from './Components/Navbar';

function App() {
const store = createStore(roodReducer, compose(
applyMiddleware(
// добавить свой мидолверий thunk для асинхроний и свой Middleware spamWords
thunk
),
// обединения стор и Redux DevTools
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
return (
<div className="cont">
  <Provider store={store}>
    <Navbar hoome="Home" abaut="Abaout" contact="Contacts" create="Create" 
    myMenu="MyMenu" login="Login"/>
  </Provider>
</div>
);
}

export default App