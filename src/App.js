import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Services from './Components/Services';

function App() {
  return (
    <>
      <Router basename='portfolio'>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/services' element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
