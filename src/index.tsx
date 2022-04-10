import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {theme} from "./theme/theme";
import {ThemeProvider} from '@material-ui/core/styles';


const container = document.getElementById('root');

const root = createRoot(container as Element | DocumentFragment);
root.render(<React.StrictMode>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,);

