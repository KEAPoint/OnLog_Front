import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/style/GlobalStyled';
import theme from './components/common/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
   
      <GlobalStyle/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
