import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; //부트스트랩

import "./jhRouter"
import axios from "axios";
import {useState} from "react";
import JhRouter from "./jhRouter";


const App = () => {
    const [data, setData] = useState();
    const onClick = () =>{
        axios
            .get('api/studytest')
            .then((response) => {
                setData(response.data);
            });
    }


  return (
    <div className="App">
     <JhRouter/>
        <div>
        <button onClick={onClick}>차트데이터</button>
        </div>
        {data && (
            <textarea
                rows={3}
                value={JSON.stringify(data,null,2)}
                readOnly={true}/>
        )}
    </div>
  );
}

export default App;
