import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import Wireframe from "./components/Wireframe";
import Main from "./Main";
import WebsiteDesignPage from "./WebsiteDesignPage";
import WebsiteCode from "./WebsiteCode";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wireframe />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
