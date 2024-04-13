import {act, render, screen} from '@testing-library/react'
import App from "./App.tsx";
import {BrowserRouter} from "react-router-dom";
import {userEvent} from "@storybook/test";
import {I18nextProvider} from "react-i18next";
import i18n from "i18next";

describe('AppPage', () => {

    test('user should go to home when clicks on Link', async () => {
        // Render element

        render(<I18nextProvider i18n={i18n}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </I18nextProvider>
        )

        await act( async () => {
            // Prepare user action simulation
            const user = userEvent.setup()

            // Acción del test
            let url = window.location.pathname;

            // Result
            expect(url).toEqual('/');

            await user.click(screen.getByRole('link'));

            url = window.location.pathname;

            expect(url).toEqual('/home');
        })
    })
})
