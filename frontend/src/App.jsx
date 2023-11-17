import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./config/router";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalContextProvider from "./Context/GlobalContext";

function App() {
  return (
    <>
      <GlobalContextProvider value={{}}>
        <RouterProvider router={router} />
      </GlobalContextProvider>
    </>
  );
}

export default App;
