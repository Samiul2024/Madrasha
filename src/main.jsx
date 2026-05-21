import React from "react";

import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";

import { Toaster } from "react-hot-toast";

import './index.css';
import './styles/responsive.css';

import App from "./App";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Toaster
          position="top-right"
        />

        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
