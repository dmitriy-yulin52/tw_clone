import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import {theme} from "./theme/theme";
import {ThemeProvider} from '@material-ui/core/styles';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";


const container = document.getElementById('root');

const rootRender = createRoot(container!);

rootRender.render(
    <HashRouter>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <App/>
            </Provider>
        </ThemeProvider>
    </HashRouter>
);

