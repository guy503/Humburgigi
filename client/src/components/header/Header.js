import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import filterIcon from "../../resorces/icons/filter.svg";
import mapIcon from "../../resorces/icons/map.svg";
import allIcon from "../../resorces/icons/places.svg";
import fileIcon from "../../resorces/icons/report.svg";

const HeaderContainer = styled.header`
  position: sticky;
  top: 2rem;
  z-index: 1000;

  nav {
    background-color: var(--complementary-color);

    width: 50%;
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

    h3 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

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

const Link = styled.li`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;

  margin: 1em;
  img {
    transition: width ease-in-out 200ms;
    width: {navImgized};
    :hover {
      width: calc(var(--nav-img-sz) * 1.2);
    }
    .st0 {
      fill: #3a332d;
      stroke: #000000;
      stroke-width: 0.5;
      stroke-miterlimit: 10;
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <nav>
        <ul>
          <Link>
            <NavLink to="/send">
              <h3>שלח סיקור</h3>
              <img src={fileIcon} />
            </NavLink>
          </Link>

          <Link>
            <NavLink to="/map">
              <h3>מפה</h3>
              <img src={mapIcon} />
            </NavLink>
          </Link>

          <Link>
            <NavLink to="#">
              <h3>המסננת</h3>
              <img src={filterIcon} />
            </NavLink>
          </Link>

          <Link>
            <NavLink to="#">
              <h3>הכל</h3>
              <img src={allIcon} />
            </NavLink>
          </Link>
        </ul>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
