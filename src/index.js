import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundary from './ErrorBoundary';
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "./context/ThemeContext";


ReactDOM.render(
  <ErrorBoundary>
    
    <BrowserRouter>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </BrowserRouter>
    
    
  </ErrorBoundary>,
  document.getElementById('root')
);


