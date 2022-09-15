import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; //부트스트랩
import Header from './header';
import MyApp from "./calendar";
import Tables from "./table";
import "./mainpage.css";


const Mainpage = () => {

  return (
    <div className="mainpage">
      <Header></Header>
      <div className="mainbody">
      <div className="div1">
      <MyApp></MyApp>
      <Tables/>
      </div>
      <div className="tablediv1">
      <Tables></Tables>
      </div>
      </div>
      </div>
  );
}


export default Mainpage;
