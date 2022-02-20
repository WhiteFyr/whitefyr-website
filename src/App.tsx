import React from 'react';
import {
    Routes,
    Route
} from 'react-router-dom';

// Import pages for routing
import AboutMe from './pages/AboutMe';
import Builds from './pages/Builds';
import Downloads from './pages/Downloads';
import ContactMe from './pages/ContactMe';
import Home from './pages/Home';

const App = () => {
    return (
        <div>
          <Routes>
            <Route path="/about" element={<AboutMe />} />
            <Route path="/builds" element={<Builds />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/" element={<Home />} />
          </Routes>
       </div>
    );
};

export default App;