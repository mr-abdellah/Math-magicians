import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quote from './pages/Quote';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </Router>
  );
}
