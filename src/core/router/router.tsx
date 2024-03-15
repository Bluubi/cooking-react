import {createBrowserRouter} from "react-router-dom";
import App from "../../App.tsx";
import {Index} from "../../features/index/application";

export const router = createBrowserRouter([
    { path: '', element: <App />},
    { path: 'index', element: <Index />}
])
