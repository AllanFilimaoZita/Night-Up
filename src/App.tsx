import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import EventDetails from './pages/detalhes/event-details';
import Payment from './pages/Payment/Payment';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event/:id" element={<EventDetails />} />
      <Route path="/payment/:id" element={<Payment />} />
    </Routes>
  );
}

export default App;