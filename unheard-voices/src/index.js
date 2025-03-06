import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App'; // Import App (which has the navbar)
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Sports from './pages/Sports';
import Technology from './pages/Technology';
import Sensory from './pages/Sensory';
import Language from './pages/Language';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Define your routes
const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />, // ✅ App handles Login internally
    children: [
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "sports", element: <Sports /> },
      { path: "technology", element: <Technology /> },
      { path: "sensory", element: <Sensory /> },
      { path: "language", element: <Language /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);