import './App.css';
import {applyMiddleware, compose, createStore} from 'redux'
import { roodReducer } from './Reduxs/roodReducer';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import Menu from './pages/Menu';
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
<Provider store={store}>
  <Navbar />
    <Menu />
</Provider>
);
}

export default App