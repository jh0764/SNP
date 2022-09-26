import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; //부트스트랩
import Header from './header';
import Calendarr from "./calendar";
import "./mainpage.css";
import StudentTable from "./table";


const Mainpage = () => {
  return (
    <div className="mainpage">
      <Header></Header>
      <div className="mainbody">
      <div className="div1">
          <Calendarr/>
      </div>
        <StudentTable/>



      </div>
      </div>
  );
}


export default Mainpage;
