import React from 'react'
import ReactDOM from 'react-dom/client'
import './core/i18n.ts';
import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./core/router.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <RouterProvider router={router}  />
      </React.StrictMode>
)
