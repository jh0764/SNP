import React from 'react';
// import {useEffect, useState} from 'react';
// import axios from 'axios';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./login/Login";
import Join from "./join/Join";
import ReadingTest from "./readingTest/ReadingTest";
import Test from "./Test";

function App() {
  // const [hello, setHello] = useState('')
  //
  // useEffect(() => {
  //   axios.get('/api/hello')
  //       .then(response => setHello(response.data))
  //       .catch(error => console.log(error))
  // }, []);

  return (
      <div>
          {/*<h1>이것은 넘어온 데이터 : {hello}</h1>*/}
        <BrowserRouter>
           <Routes>
             <Route path="/" element={<Login />} />
             <Route path="/join" element={<Join />} />
             <Route path="/readingTest" element={<ReadingTest />} />
               <Route path="/test" element={<Test />} />
           </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;