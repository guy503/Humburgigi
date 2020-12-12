import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: sticky;
  top: 2rem;

  nav {
    background-color: var(--complemetary-color);

    width: 40%;
    height: 5vh;

    margin: auto;
    padding: 2rem;

    display: flex;

    position: relative;

    ::after {
      content: "";
      position: absolute;
      border: 10px var(--complemetary-second-color) solid;
      width: calc(100% - 1em);
      height: calc(100% - 1em);;
      top: 0;
      left: 0;
    }
    border-radius: 15px;

    ul {
      align-items: center;
      list-style: none;
      display: flex;
      justify-content: space-between;
      width: 100%;
      color: var(--light-gray);

      li {
        text-align: center;
        flex-grow: 1;
      }

      a{
        text-decoration:none;
        :visited{
          color: var(--light-gray);
        }
      }
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <nav>
        <ul>
          <li>
            <NavLink to="/send">שלח סיקור</NavLink>
          </li>
          <li>
            <NavLink to="/map">מפה</NavLink>
          </li>
          <li>המסננת</li>
          <li>הכל</li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
