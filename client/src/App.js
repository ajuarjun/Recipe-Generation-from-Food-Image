import React from "react";
import MainPg from "./components/MainPg/MainPg";
import UploadPg from "./components/UploadPg/UploadPg";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App(){
  return(
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainPg/>}/>
          <Route path="/recipe" element={<UploadPg/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
