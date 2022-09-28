import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; //부트스트랩
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import "./header.css";

function Header(){
return(
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Button variant="outline-secondary">신규학생 등록</Button>{' '}
          <Button variant="outline-secondary">수업자료 등록</Button>{' '}
            <Button variant="outline-secondary">가정통신문</Button>{' '}
            <NavDropdown title="기초자료" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">학교등록</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">차량 탑승장소 등록</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">수강과정/단계유형/수업종류/두뇌개발/수업시간/학교과목 등록</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">입/출금 항목 등록</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">신용카드 종류 등록</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.6">퇴원사유 등록/순위 조회</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="학생 관리" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">예비 등록생 등록/조회</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">신규학생 등록</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">퇴원생 자료조회 및 재등록</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">과정/담임/학교/학년 학생자료 변경</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">주소록 그룹 문자메세지 등록/보내기</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="수강 관리" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">학생 현재인원 조회 - 문자메세지</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">교육청 감사자료 출력</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="금전 관리" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">회비입금/교재입금 등록</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">회비 자료 조회</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">교재등록/교재관리</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">오늘의 입/출금 등록</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">세금계산서 출력</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="수업자료" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">수업자료 등록</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">도서 등록/조회</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">수업 기초자료 등록/수정</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="기타자료" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">사용자 ID/PWD 변경</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">버스 승차현황 조회/프린트</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">문자 메세지 내역 확인</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">DM 자료 등록/프린트</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">학원정보 수정</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
);
}


export default Header;