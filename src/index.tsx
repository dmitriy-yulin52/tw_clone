import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import {theme} from "./theme/theme";
import {ThemeProvider} from '@material-ui/core/styles';
import {BrowserRouter, HashRouter} from "react-router-dom";


const container = document.getElementById('root');

const root = createRoot(container as Element | DocumentFragment);
root.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
);

