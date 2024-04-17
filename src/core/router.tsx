import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {HomePage} from "../pages/home";
import {CulinaryExperiencePage} from "../pages/culinary-experience";
import {RecipePage} from "../pages/recipe";

export const router = createBrowserRouter([
    {path: '', element: <App />},
    {path: 'home', element: <HomePage />},
    {path: '/experiencias-culinarias', element: <CulinaryExperiencePage />},
    {path: '/:name', element: <RecipePage />}

])
