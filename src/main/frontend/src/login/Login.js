import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import style from "./Login.module.css";

const Login = () => {
  return (
    <div className={style.body}>
      <div className={style.signIn}>
        <Form>
          <img className="mb-4" alt="로고"></img>
          <h1 className="h3 mb-3 fw-normal">로그인</h1>
          <Form.Group className="form-floating">
            <Form.Control
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="id"
            />
            <Form.Label htmlFor="floatingInput">아이디</Form.Label>
          </Form.Group>
          <Form.Group className="form-floating">
            <Form.Control
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="password"
            />
            <Form.Label htmlFor="floatingPassword">비밀번호</Form.Label>
          </Form.Group>

          <Form.Check
            type="checkbox"
            label="아이디 기억하기"
            className={style.checkbox}
          />

          <Button type="submit" className={style.button}>
            로그인
          </Button>
          <div className={style.findWrap}>
            <span className={(style.findText, style.findPw)}>
              비밀번호 찾기
            </span>
            <span className={(style.findText, style.findId)}><Link to="/readingTest">아이디 찾기</Link></span>
            <span className={(style.findText, style.signUp)}>
              <Link to="/join">회원가입</Link>
            </span>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
