import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query-devtools";
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';

import enTranslation from './locales/en/translation.json';
import deTranslation from './locales/de/translation.json';

import App from "./App";

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
serviceWorkerRegistration.register();

///////////////////
i18n.init({
    resources: {
        en: { translation: enTranslation },
        de: { translation: deTranslation },
    },
    fallbackLng: 'en', // Fallback language if a translation is missing
    lng: 'en', // Initial language
    interpolation: {
        escapeValue: false, // React already handles escaping
    },
})


const queryClient = new QueryClient({});
const root = createRoot(document.getElementById("root"));

root.render( <
    I18nextProvider i18n = { i18n } >
    <
    QueryClientProvider client = { queryClient } >
    <
    App > < /App> < /
    QueryClientProvider >
    <
    /I18nextProvider>
)