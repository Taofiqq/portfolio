import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.render(
    <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </React.StrictMode>
    , document.getElementById('root'))
    
