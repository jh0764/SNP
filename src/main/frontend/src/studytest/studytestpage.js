import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"; //부트스트랩
import Radarchart from "./RadarChart";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Studyform from "./Studyform";
import data from "bootstrap/js/src/dom/data";
import axios from "axios";

const Studytestpage = () => {

  return (
    <div className="studytestpage">
      <Container fluid="md">
      <Row>
      <Radarchart/>
      </Row>
      </Container>
        <Studyform/>
    </div>
  );
}


export default Studytestpage;
