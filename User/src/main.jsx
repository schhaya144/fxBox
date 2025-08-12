import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/index.jsx';
import { AvatarProvider } from './AvatarContext.jsx'; // Import AvatarProvider
import './index.css';
import './App.css';
import { store } from "./store/Store.jsx";
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AvatarProvider>
    <Provider store={store}><RouterProvider router={router} /></Provider>
    </AvatarProvider>
  </React.StrictMode>
);
