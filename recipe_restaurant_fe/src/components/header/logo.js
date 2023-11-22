import React from "react";
import logoImage from "../../images/KakaoTalk_20230824_002809865.png";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const LogoContainer = styled.div`
  font-size: 2.3rem;
  font-weight: 900;
  position: relative;
  display: inline-flex;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Logo = () => {
    const navigation = useNavigate();

    const onClickToMain = () => {
        navigation("/");
      }
      
      return (
        <LogoContainer onClick={onClickToMain}>
            <img src={logoImage} alt="Logo" />
        </LogoContainer>
    );
}

export default Logo;