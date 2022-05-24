import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from ".//components/Nav.js";
import Main from ".//components/Main.js";
import Boba from ".//components/Boba.js";
import How from ".//components/How.js";
import List from ".//components/List.js";
import BobaMethod from "./components/BobaMethod";
import Footer from "./components/Footer";
import ErrorComponent from "./components/ErrorComponent";
import bobaUrl from "../src/db/db.json";

function MainComponent() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="*" element={<ErrorComponent />} />
          <Route path="/" element={<Main />} />
          <Route path="boba" element={<Boba />} />
          <Route path="how" element={<How />} />
          <Route path="list" element={<List bobaUrl={bobaUrl} />} />
          <Route path={"list/:id"} element={<BobaMethod bobaUrl={bobaUrl} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default MainComponent;
