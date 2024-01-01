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
    <Route path="portfolio" element={<Header/>}>
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
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', App)
  alert('Please click the cart icon to add things to your cart and they should appear at the bottom of the shopping list ')
} else {
  App()
}
export default App;
