import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./styles/fonts.css"
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from "react-router-dom";
import { SnackbarProvider } from 'notistack';


ReactDOM.render(
    <BrowserRouter>
        <SnackbarProvider maxSnack={3}>
            <Route path="/" component={App}/>
        </SnackbarProvider>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
