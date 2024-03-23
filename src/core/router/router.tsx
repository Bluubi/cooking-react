import {createBrowserRouter} from "react-router-dom";
import App from "../../App.tsx";
import {Index} from "../../features/index/application";
import {getCookie} from "../../utils/cookies/get.ts";

const basename = '/cooking-react/';
export const router = createBrowserRouter([
    { path: '', element: <App />, loader: async () => {
            const cookie = getCookie('login');
            if(cookie){
                window.location.href = 'index';
                return null;
            }
            return null;
        }},
    { path: 'index', element: <Index />},
], {basename})
