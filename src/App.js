import GlobalStyle from "./components/GlobalStyle";
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {AnimatePresence} from 'framer-motion'




function App() {


  return (
    <div className="App">
      <GlobalStyle />

      <Router >
        <Nav />
        <AnimatePresence>
        <Routes >
          <Route path="/" exact element={<Home />} />
          <Route path="/blog" exact element={<Blog />} />
        </Routes>
        </AnimatePresence>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
