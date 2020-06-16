import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import AppNavbar from "./components/layout/AppNavbar";

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Fragment>
      <AppNavbar />
    </Fragment>
  );
}

export default App;
