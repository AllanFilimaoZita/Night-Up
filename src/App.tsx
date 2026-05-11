import { Import } from "lucide-react";
import "./App.css";
import "./index.css";

import Favorites from "./pages/favorites/Favorites";
import Header from "./components/Header";
import NavBar  from "./components/NavBar";
function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Favorites />
    </>
  );
}

export default App;