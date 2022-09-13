import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./login/Login";
import Join from "./join/Join";
import ReadingTest from "./readingTest/ReadingTest";

function App() {
  const [hello, setHello] = useState('')

  useEffect(() => {
    axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
  }, []);

  return (
      <div>
        <BrowserRouter>
           <Routes>
             <Route path="/" exact element={<Login />} />
             <Route path="/join" exact element={<Join />} />
             <Route path="/readingTest" exact element={<ReadingTest />} />
           </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;