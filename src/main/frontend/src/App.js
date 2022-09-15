import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; //부트스트랩


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Studytestpage from './studytest/studytestpage';
import Mainpage from './main/mainpage';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <ul>
        <li>
          <Link to="/studytest/studytestpage">studytestpage</Link>
        </li>
      </ul>
      <Routes>
      <Route path="/studytest/studytestpage" element={<Studytestpage/>} />
      <Route path="/" element={<Mainpage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
