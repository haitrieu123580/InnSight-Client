import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { StyledEngineProvider } from '@mui/material/styles';
import initStore from './redux/store';
import './index.css'
const store = initStore()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StyledEngineProvider injectFirst>
    <Provider store={store}>
      <App />
    </Provider >
  </StyledEngineProvider>

);
reportWebVitals();
