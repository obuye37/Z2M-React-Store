import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";

import App from './App';
// import { UserProvider } from './utils/context/userContext';
// import { CategoriesProvider } from './utils/context/categoriesContext';
// import { CartProvider } from './utils/context/cartContext';
import { persistor, store } from './store/store';

import './index.scss';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          {/* <UserProvider> */}
            {/* <CategoriesProvider> */}
              {/* <CartProvider> */}
                <App />
              {/* </CartProvider> */}
            {/* </CategoriesProvider> */}
          {/* </UserProvider> */}
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

