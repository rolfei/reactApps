import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import Greeting from './components/Greeting';
import LogInOut from './components/LogInOut';
import CallAuth from './components/CallAuth';
import ParentAuth from './components/ParentAuth';


import theme from './theme';
const config = require('./config');

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
const useremail ='';



root.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
      <ParentAuth email={useremail}/>

  </ThemeProvider>,
);
