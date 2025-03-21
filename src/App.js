import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
  <>
  <Router>
    <Header/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/services' element={<Services/>} />
  
    </Routes>
    <Footer/>
  </Router>
  </>
  );
}

export default App;
