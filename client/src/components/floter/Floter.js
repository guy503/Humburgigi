import React from "react";
import styled from "styled-components";
import filterIcon from "../../resorces/icons/filter.svg";

const Container = styled.div`
  position: fixed;
  z-index: 1001;

  display: flex;

  right: 0;
  bottom: 2em;
  justify-content: space-between;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  align-items: center;
  background-color: var(--complementary-second-color);

  border: var(--complementary-color) 0.25em solid;
  color: var(--light-gray);

  transition: ease-in-out 300ms all;

  height: calc( var(--nav-img-sz) + 0.5em );

  img {
    max-width: var(--nav-img-sz);
    margin: 0.5em;
  }

  :hover {
    height: 80vh;
  }
`;

export default function Floter() {
  return (
    <Container>
      <img src={filterIcon} alt="" />
      <h3>המסננת</h3>
    </Container>
  );
}
