import React from 'react';
import {
    Routes,
    Route
} from 'react-router-dom';

// Import pages for routing
import Downloads from './pages/Downloads';
import Home from './pages/Home';

const App = () => {
    return (
        <div>
          <Routes>
            {/* If the current URL is /about, this route is rendered
                while the rest are ignored */}
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/" element={<Home />} />
          </Routes>
       </div>
    );
};

export default App;