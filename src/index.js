import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import App from "./App";

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
serviceWorkerRegistration.register();

///////////////////
const queryClient = new QueryClient({});
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render( <
    BrowserRouter >

    <
    QueryClientProvider client = { queryClient } >
    <
    App > < /App>

    <
    /QueryClientProvider> < /
    BrowserRouter >
);