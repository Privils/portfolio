import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
  <>
  <Router>
    <Header/>
    <Routes>
      {/* <Route index element={<Home/>}/> */}
    </Routes>
  </Router>
  </>
  );
}

export default App;
