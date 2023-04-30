import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "@remix-run/router";
import Gedfirst from "./Gedfirst";
import Gedsecond from "./Gedsecond";
import Gedthird from "./Gedfirst";

function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <Routes>
        <Route path="/" element={<Gedfirst />} />
        <Route path="/gedsecond" element={<Gedsecond />} />
        <Route path="/gedthird" element={<Gedthird />} />
      </Routes>
    </Router>
  );
}

export default App;
