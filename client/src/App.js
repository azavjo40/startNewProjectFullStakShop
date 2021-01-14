import './App.css';
import {applyMiddleware, compose, createStore} from 'redux'
import { roodReducer } from './Reduxs/roodReducer';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import Navbar from './Components/Navbar';
import useRouters from './routers/Router'
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
const isAuthUser = false
const routers = useRouters(isAuthUser)
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
    <Router>
      {isAuthUser ?
      <Navbar home="Home" contact="Contacts" create="Create" myMenu="MyMenu" />
      :
      <Navbar home="Home" contact="Contacts" login="Login" l="/auth" /> }
      {routers}
    </Router>
  </Provider>
</div>
);
}

export default App