import GlobalStyle from './styles/GlobalStyle';


import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import Blog from './components/pages/Blog';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';


function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Router>
       
        {/* <AnimatePresence> */}
        <Nav />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/resume" exact element={<Resume />} />
            <Route path="/blog" exact element={<Blog />} />
          </Routes>
          <Footer />
        {/* </AnimatePresence> */}
        
      </Router>
    </div>
  );
}

export default App;
