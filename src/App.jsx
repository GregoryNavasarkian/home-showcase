import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Footer from "./components/Footer";

import Home from "./pages/Home";
import Security from "./pages/Security";
import Automation from "./pages/Automation";
import Appliances from "./pages/Appliances";
import Landscaping from "./pages/Landscaping";

const App = () => {
  return (

    <div className="landscape:lg:mt-0 landscape:md:mt-20 landscape:sm:mt-0 bg-indigo-200">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/security" element={<Security />} />
          <Route path="/automation" element={<Automation />} />
          <Route path="/appliances" element={<Appliances />} />
          <Route path="/landscaping" element={<Landscaping />} />        
        </Routes>
        <Footer />
      </Router>
    </div>

  );
};

export default App;
