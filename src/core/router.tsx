import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {HomePage} from "../pages/home";
import {CulinaryExperiencePage} from "../pages/culinary-experience";

export const router = createBrowserRouter([
    {path: '', element: <App />},
    {path: 'home', element: <HomePage />},
    {path: 'experiencias-culinarias', element: <CulinaryExperiencePage />},

])
