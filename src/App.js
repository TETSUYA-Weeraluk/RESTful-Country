import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CountryDetail from "./pages/CountryDetail";
import RootCountry from "./pages/RootCountry";
import Country from "./pages/Country";

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <RootCountry />,
      children: [
        { index: true, element: <Country /> },
        { path: ":capital", element: <CountryDetail /> },
      ],
    },
  ]);

  return <RouterProvider router={route} />;
};

export default App;
