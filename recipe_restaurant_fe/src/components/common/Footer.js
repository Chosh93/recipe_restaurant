import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #fff;
  height : 80px;
  position: relative;
  top: 10%;
  display: flex;
  justify-content: center;
  margin-top: 30px;

  .notion-link{
    font-size: x-small;
    color: gray;
    opacity: 70%;
    width: fit-content;
  }

  .notion-link p {
    text-align: center;
  }

  p{
    margin-top: 0;
    margin-bottom: 1rem;
  }
  
  span{
    margin: 0 4px;
  }
  `

const Footer =()=> {
  return (
    <Container>
      <div className="notion-link">
        <div>
          <span>서비스 소개</span>
          <span>이용약관</span>
          <span>개인정보처리방침</span>
          <span>FAQ</span>
        </div>
      <p>Copyright 2023 (recipe&restaurant) All rights reserved.</p>
      </div>
    </Container>

  )
}

export default Footer;