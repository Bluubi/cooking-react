import React from 'react'
import ReactDOM from 'react-dom/client'
import './core/i18n.ts';
import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./core/router/router.tsx";
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId="292515494513-isn9gd8dgmnthileuat9ejmi10pf07t4.apps.googleusercontent.com">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
  </GoogleOAuthProvider>
)
