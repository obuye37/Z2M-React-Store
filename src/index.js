import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {BrowserRouter as Router } from 'react-router-dom'
import { UserProvider } from './utils/context/userContext';
import { CategoriesProvider } from './utils/context/categoriesContext';

import './index.scss';
import { CartProvider } from './utils/context/cartContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
             <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

