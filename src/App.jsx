import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import Blogs from "./components/Blogs";
import About from "./components/About";
import Skills from './components/Skills'

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          <Route path="/about" element={<About/>} />
          <Route path="/skills" element={<Skills/>} />
      </Routes>
    </Router>
  );
};

export default App;
