import {applyMiddleware,compose,createStore} from "redux";

import thunk from 'redux-thunk';
import rootReducer from "./rootReducer";
import FormationReducer from './FormationReducer';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(FormationReducer, compose(applyMiddleware(thunk), devtools));

export default store;