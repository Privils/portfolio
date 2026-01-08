import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import 'animate.css';

function App() {
  return (
    <Router basename='/portfolio'>
      <Header />
      <Routes> 
        <Route index element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
