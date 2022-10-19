import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from "./main/mainpage";
import Studytestpage from "./studytest/studytestpage";

const JhRouter = () => {

    return(
        <div className="jhrouter">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Mainpage/>}/>
                    <Route path="/studytest" element={<Studytestpage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default JhRouter;