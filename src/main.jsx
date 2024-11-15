import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {UserProvider} from "./Context/userContext.jsx";
import {ProductsProvider} from "./Context/productContext.jsx";
import './index.scss'
import {BrowserRouter} from "react-router-dom";
import {CartProvider} from "./Context/cartContext.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <UserProvider>
              <ProductsProvider>
                  <CartProvider>
                      <App />
                  </CartProvider>
              </ProductsProvider>
          </UserProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
