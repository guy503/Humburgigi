import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: sticky;
  top: 2rem;

  nav {
    background-color: var(--complementary-color);

    width: 40%;
    height: 5vh;

    margin: auto;
    padding: 2rem;

    display: flex;

    position: relative;

    ::before {
      content: "";
      z-index: -1;
      padding: 1em;
      position: absolute;
      background-color: var(--complementary-second-color);
      width: calc(100% - 1em);
      height: calc(100% - 1em);
      top: -0.5em;
      left: -0.5em;
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
