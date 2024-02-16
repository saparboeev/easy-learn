import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import InfoPage from "./pages/InfoPage";
import HomePage from "./pages/HomePage";
import AllCollapseExample from "./pages/Faq";
import React, { useRef } from "react";
import Login from "./pages/Login";

export const Context = React.createContext();

function App() {
  return (
    <div>
      <Context.Provider value={{}}>
        <Navbar />
      </Context.Provider>

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/infopage" element={<InfoPage />} />
        <Route path="/faq" element={<AllCollapseExample />} />
        <Route path="/login" element={<Login /> } />
      </Routes>
    </div>
  );
}

export default App;
