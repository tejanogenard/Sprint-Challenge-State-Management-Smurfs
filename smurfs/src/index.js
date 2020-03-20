import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { createStore , applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { smurfReducer as reduer} from './reducers/smurfReducer'


const store  = createStore(reduer)

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store = {store}>
<App />
</Provider>
,rootElement);