import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {BrowserRouter as Router } from 'react-router-dom'
import { UserProvider } from './utils/context/userContext';
import { ProductsProvider } from './utils/context/productsContext';

import './index.scss';
import { CartProvider } from './utils/context/cartContext';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
             <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

