import App from "../../App.tsx";
import '../base.ts';
import {BrowserRouter} from "react-router-dom";

const meta = {
    title: 'Index',
    component: App
}

export const Template = () =>
    <BrowserRouter>
        <App />
    </BrowserRouter>

export default meta;
