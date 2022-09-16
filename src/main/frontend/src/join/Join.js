import React, { useState } from "react";
import style from "./Join.module.css";

function Join() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");

  const [nameMessage, setNameMessage] = useState("");
  const [idMessage, setIdMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [pass1Message, setPass1Message] = useState("");
  const [pass2Message, setPass2Message] = useState("");

  const [isName, setIsName] = useState(false);
  const [isId, setIsId] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPass1, setIsPass1] = useState(false);
  const [isPass2, setIsPass2] = useState(false);

  const onChangeName = (event) => {
    setName(event.target.value);
    if (event.target.value.length < 1) {
      setIsName(false);
      setNameMessage("필수 정보입니다.");
    } else {
      setIsName(true);
      setNameMessage("사용가능한 이름입니다.");
    }
  };

  const onChangeId = (event) => {
    setId(event.target.value);
    if (event.target.value.length < 1) {
      setIsId(false);
      setIdMessage("필수 정보입니다.");
    } else {
      setIsId(true);
      setIdMessage("사용가능한 아이디입니다.");
    }
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
    if (event.target.value.length < 1) {
      setIsEmail(false);
      setEmailMessage("필수 정보입니다.");
    } else {
      setIsEmail(true);
      setEmailMessage("사용가능한 이메일입니다.");
    }
  };

  const onChangePass1 = (event) => {
    setPass1(event.target.value);
    if (event.target.value.length < 1) {
      setIsPass1(false);
      setPass1Message("필수 정보입니다.");
    } else {
      setIsPass1(true);
      setPass1Message("");
    }
  };

  const onChangePass2 = (event) => {
    setPass2(event.target.value);
    if (event.target.value.length < 1) {
      setIsPass2(false);
      setPass2Message("필수 정보입니다.");
    } else {
      if (pass1 === event.target.value) {
        setIsPass2(true);
        setPass2Message("비밀번호가 일치합니다.");
      } else {
        setPass2Message("비밀번호가 일치하지 않습니다.");
        setIsPass2(false);
      }
    }
  };

  return (
      <div className={style.body}>
        <div className={style.formJoin}>
          <div className="text-center" id={style.header}>
            <h2>강사 회원가입</h2>
          </div>
          <form>
            <div className="row g-3">
              <div className="col-12">
                <label htmlFor="name" className={style.formLabel}>
                  이름
                </label>
                <div>
                  <input
                      onChange={onChangeName}
                      value={name}
                      type="text"
                      className="form-control"
                      id="name"
                      required
                      style={{
                        height: 50,
                      }}
                  />
                </div>
                <span className={isName ? style.green : style.error}>
                {nameMessage}
              </span>
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="id" className={style.formLabel}>
                아이디
              </label>
              <div>
                <input
                    onChange={onChangeId}
                    value={id}
                    type="text"
                    className="form-control"
                    id="id"
                    style={{
                      height: 50,
                    }}
                />
              </div>
              <span className={isId ? style.green : style.error}>
              {idMessage}
            </span>
            </div>

            <div className="col-12">
              <label htmlFor="email" className={style.formLabel}>
                이메일
              </label>
              <div>
                <input
                    onChange={onChangeEmail}
                    value={email}
                    type="email"
                    className="form-control"
                    id="address"
                    required
                    style={{
                      height: 50,
                    }}
                />
              </div>
              <span className={isEmail ? style.green : style.error}>
              {emailMessage}
            </span>
            </div>

            <div className="col-12">
              <label htmlFor="pass1" className={style.formLabel}>
                비밀번호
              </label>
              <div>
                <input
                    onChange={onChangePass1}
                    value={pass1}
                    type="password"
                    className="form-control"
                    id="pass1"
                    required
                    style={{
                      height: 50,
                    }}
                />
              </div>
              <span className={isPass1 ? style.green : style.error}>
              {pass1Message}
            </span>
            </div>

            <div className="col-12">
              <label htmlFor="pass2" className={style.formLabel}>
                비밀번호 재확인
              </label>
              <div>
                <input
                    onChange={onChangePass2}
                    value={pass2}
                    type="password"
                    className="form-control"
                    id="pass2"
                    style={{
                      height: 50,
                    }}
                />
              </div>
            </div>
            <span className={isPass2 ? style.green : style.error}>
            {pass2Message}
          </span>
            <button
                className="w-100 btn btn-primary btn-lg"
                type="submit"
                disabled={!(isName && isId && isEmail && isPass1 && isPass2)}
                style={{
                  marginTop: 30
                }}
            >
              가입하기
            </button>
          </form>
        </div>
      </div>
  );
}

export default Join;
