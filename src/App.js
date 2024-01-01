import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Aboutme from "./components/Aboutme";
import Home from "./components/Home";

const provider = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Header/>}>
      <Route index element={<Home />} />
      <Route path="Projects" element={<Projects />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Aboutme" element={<Aboutme />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={provider} />
    </>
  );
}

export default App;
 /*
 
      <Route index element={<Home />} />
      <Route path="Projects" element={<Projects />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Aboutme" element={<Aboutme />} />
       if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', App)
    alert('Please click the cart icon to add things to your cart and they should appear at the bottom of the shopping list ')
  } else {
    App()
  }
  */