import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SubPage from "./pages/SubPage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./Footer";


export default function App() {
  return (
    <Router>
      <div className="App bg-gray-200">
        <Navbar />
          <Routes>
            <Route exact path="/" element={
              <HomePage/>
            }>
              
            </Route>
            <Route path="/subpage" element={
              <SubPage/>
            }>
            </Route>
            <Route path="*" element={
              <NotFoundPage/>
            } />
          </Routes>
        <Footer />
      </div>
    </Router>
  )
}