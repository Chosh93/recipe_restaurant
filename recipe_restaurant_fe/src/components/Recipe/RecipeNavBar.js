import React, {useState} from "react";
import {BsList} from "react-icons/bs";
import styled from "styled-components";

const NavStyle = styled.div`
  .navigation_wrapper {
    display: flex;
    align-items: center;
    top: 0;
    z-index: 9999;
  }
  
  .menu_list {
    float: right;
    .close-icon {
        float: right;
        margin: 1rem 1.5rem;
        font-size: 1.6rem;
        cursor: pointer;
    }
    .menu_name {
        display: flex;
        justify-content: space-evenly;
        position: relative;
        top: 6rem;
        float: right;
        flex-direction: column;
        margin-bottom: 2rem;
    }
  }
  .menu_name a {
    text-decoration: none;
    color: inherit;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

    .burger_menu{
      display: block;
      margin-top: 0.5rem;
      font-size: 1.5rem;
      font-weight: bolder;
      cursor: pointer;
    }

    .menu_box_visible {
      font-weight: bold;
      position: absolute;
      right: 2.2rem;
      top: 2rem;
      color: #050E3D;
      z-index: 9999;
    }
  
    .menu_box_hidden {
      display: none;
    }
  

  
    .menu_item {
      margin: 15px 0;
    }  

    @media (max-width: 1000px) {
    .burger_menu {
      font-size: 1.5rem;
      margin-left: 0.3rem;
    }

    .menu_name a {
      font-size: 1.5rem;
    }
    .menu_box_visible {
      margin-top: 1rem;
      color: #050E3D;
      font-weight: bolder;
    }
  }

`;


const RecipeNavBar = () => {
    const [menuToggle, setMenuToggle] = useState(false);

    const menu = [
        {name : "홈", address : "/"},
        {name : "로그인", address : "/login"},
        {name : "고객센터", address: "/"}
    ];

    return (
        <NavStyle>
        <nav className="navigation_wrapper">
            <div className="burger_menu" onMouseEnter={() => setMenuToggle(true)}>
                <BsList/> 
            </div>
            <div className={['menu_box', !menuToggle ? "menu_box_hidden" : "menu_box_visible",].join(" ")}>
                <div className="menu_list" onMouseLeave={() => setMenuToggle(false)}>
                    <div className="menu_name">
                    {menu.map((data,index) => (
                    <a href={data.address} key={index} onClick={() => setMenuToggle(false)}>
                        {data.name}
                    </a>
                    ))}
                    </div>
                </div>
            </div>
        </nav>
        </NavStyle>
    );
}

export default RecipeNavBar;