import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: sticky;
  top: 2rem;

  nav {
    background: var(--background-header);

    width: 40%;
    height: 5vh;

    margin: auto;
    padding: 2rem;

    display: flex;

    border: 1px #aaa solid;
    border-radius:15px;

    ul {
      align-items: center;
      list-style: none;
      display: flex;
      justify-content: space-between;
      width: 100%;

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
          <li>שלח סיקור</li>
          <li>מפה</li>
          <li>המסננת</li>
          <li>הכל</li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
