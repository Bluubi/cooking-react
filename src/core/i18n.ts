import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            en: {
                translation: {
                    home: {
                        welcomeToCooking: "Welcome to <strong>Cooking React</strong>",
                        guest: "Log as guest",
                    },
                    index: {
                        discoverRecipes: "Discover all our recipes starting with the letter <strong>{{letter}}</strong>"
                    }
                }
            },
            es: {
                translation: {
                    home: {
                        welcomeToCooking: "Bienvenido a <strong>Cooking React</strong>",
                        guest: "Entrar como invitado",
                    },
                    index: {
                        discoverRecipes: "Descubre todas nuestras recetas que empiezan por la letra <strong>{{letter}}</strong>"
                    }
                }
            },
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });

export default i18n;
