import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    return (
            <div>
              <body className="form-signIn">
                <div className="container">
                  <form>
                    <img className="mb-4" alt="로고"></img>
                    <h1 className="h3 mb-3 fw-normal">로그인</h1>

                    <div className="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">아이디</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label for="floatingPassword">비밀번호</label>
                    </div>

                    <div className="checkbox mb-3">
                      <input type="checkbox" value="remember-me" /> 아이디 기억하기
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">
                      로그인
                    </button>
                    <div className="find-wrap">
                      <span>
                        <a className="find-text find-pw">비밀번호 찾기</a>
                      </span>
                      <span>
                        <a className="find-text find-id">아이디 찾기</a>
                      </span>
                      <span>
                        <a className="find-text sign-up" href="/join">
                          <Link to="/join">회원가입</Link>
                        </a>
                      </span>
                    </div>
                  </form>
                </div>
              </body>
            </div>
    );
};

export default Login;


