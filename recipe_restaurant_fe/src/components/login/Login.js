import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountApi from "../../api/AccountApi";

const Login = () => {

  const navigate = useNavigate();

  // 키보드 입력 받기
  const [loginId, setLoginId] = useState("");
  const [loginPw, setLoginPw] = useState("");

  // 오류 메시지
  const [loginIdOkMsg, setLoginIdOkMsg] = useState("");
  const [loginIdMsg, setLoginIdMsg] = useState("");
  const [loginPwOkMsg, setLoginPwOkMsg] = useState("");
  const [loginPwMsg, setLoginPwMsg] = useState("");

  // 유효성 검사
  const [isLoginId, setIsLoginId] = useState(false);
  const [isLoginPw, setIsLoginPw] = useState(false);

  // 정규식
  const idRegEx = /^[A-Za-z0-9]{3,15}$/g;
  const pwRegEx = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*+=-]).{8,20}$/;

  const onChangeLoginId = (e) => {
      const loginInputId = e.target.value;
      setLoginId(loginInputId);
      if(!idRegEx.test(loginInputId)) {
          setIsLoginId(false);
          setLoginIdMsg("3~15자리 영문자 또는 숫자를 입력하세요.");
      } else {
          setIsLoginId(true);
          setLoginIdOkMsg("");
      }
    }

    const onChangeLoginPw = (e) => {
      const loginInputPw = e.target.value ;
      setLoginPw(loginInputPw);

      if (!pwRegEx.test(loginInputPw)) {
          setIsLoginPw(false);
          setLoginPwMsg("8~20자리 소문자, 숫자, 특수문자를 입력하세요.");
      } else {
          setIsLoginPw(true);
          setLoginPwOkMsg("");
      }        
    }

    const handleOnKeyPress = e => {
      if(e.key === 'Enter') {
          onClickLogin();
      }
  }

  const onClickLogin = async() => {
      try {
        const response = await AccountApi.userLogin(loginId, loginPw);
        if(response.status === 200) {
          localStorage.setItem("userId", loginId);
          localStorage.setItem("userPw", loginPw);
          localStorage.setItem("isLogin", "TRUE");
          localStorage.setItem("loginValue", "DEFAULT");
          console.log("로그인 완료");
          navigate("/recipe");
        }
      } catch(e) {
        console.log(e);
      }
    };

  return (
      <>
      <input type="text" value={loginId} className="loginInput" placeholder="아이디" onChange={onChangeLoginId} onKeyUp={handleOnKeyPress}/> 
      <input type="password" value={loginPw} className="loginInput" placeholder="패스워드" onChange={onChangeLoginPw} onKeyUp={handleOnKeyPress}/>

      </>
  )
}

export default Login;