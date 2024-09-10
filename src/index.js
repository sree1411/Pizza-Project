import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Pizzas from "./components/pizzasection/Pizzas";
import Desserts from "./components/Desserts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import { store } from "./app/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pizzas",
        element: <Pizzas />,
      },
      {
        path: "/desserts",
        element: <Desserts />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
