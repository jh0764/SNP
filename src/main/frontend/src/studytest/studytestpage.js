import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; //부트스트랩
import Radarchart from "./RadarChart";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Studytestpage = () => {
  return (
    <div className="studytestpage">
      <Container fluid="md">
      <Row>
      <Radarchart/>
      </Row>
      </Container>
    </div>
  );
}


export default Studytestpage;
