// App.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import "./index.css";

// Componentes
import Header from "./components/Header";
import NavBar from "./components/NavBar";

// Páginas
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;