import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import EventDetails from "./pages/detalhes/event-details";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<EventDetails />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;