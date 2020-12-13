import burger from "../../../resorces/burger.svg";
import israel from "../../../resorces/white-israel-map.svg";
import { v4 } from "uuid";
import styled from "styled-components";

const Card = styled.div`
  width: 80%;
  max-height: calc(100vh - 200px);
  margin: 0 auto;
  border-radius: 30px;
  padding:2em;


  ${({ color }) => {
    switch (color) {
      case "blue":
        return `
          background-color: var(--complementary-second-color);
          box-shadow: 20px 40px var(--complementary-color);
          border: 2px var(--complementary-color) solid;`;
      case "orange":
        return `
          background-color: var(--secondary-color);
          box-shadow: 20px 40px var(--thirdly-color);
          border: 4px var(--thirdly-color) solid;`;
      default:
        break;
    }
  }}

  @media (max-width: 765px) {
    width: 90%;
    height: fit-content;
    margin: 0 auto 5em auto;
  }
`;

const AboutContainer = styled(Card)`
  p {
    overflow-y: scroll;
    max-height: 80%;
  }
`;

export const About = ({color}) => {
  return (
    <AboutContainer color={color} className="About card hr">
      <h2>עליי</h2>
      <span />
      <p>
        וואלה כן אח שלי Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer lacinia, justo ac interdum ultricies, nunc ipsum volutpat nulla,
        vehicula blandit diam metus at purus. Etiam id metus elit. Sed id justo
        est. Etiam pulvinar erat sit amet urna viverra semper et ut nibh. Fusce
        pulvinar nibh nunc, ac efficitur eros ullamcorper eu. Quisque aliquet,
        libero a porta dictum, massa eros fermentum odio, ac hendrerit lorem
        felis in arcu. Morbi sit amet felis erat. Quisque a feugiat turpis.
        Quisque ornare vehicula bibendum. Morbi nec sollicitudin ipsum.
      </p>
    </AboutContainer>
  );
};

const Top5Container = styled(Card)`
  ul {
    padding: 2em;
    text-align: center;

    li {
      font-size: 2em;
    }
  }
`;

export const Top5 = ({ color }) => {
  return (
    <Top5Container color={color} className="eng">
      <h2>Top 5</h2>
      <span />
      <ol>
        <li>susu</li>
        <li>garage</li>
        <li>hamburgigi</li>
        <li>what</li>
        <li>yup</li>
      </ol>
    </Top5Container>
  );
};

const CalenderContainer = styled(Card)``;

export const Calender = ({ color }) => {
  return (
    <CalenderContainer color={color} className="hr">
      <h2>לוח שנה</h2>
    </CalenderContainer>
  );
};

const NewsContainer = styled(Card)`
  grid-column: 2;
`;

export const News = ({ color }) => {
  return (
    <NewsContainer color={color} className="hr">
      <h2>חדשות</h2>
    </NewsContainer>
  );
};

const MapContainer = styled(Card)`
  grid-row: 1/3;
  height: 100%;
  width: 100%;

  img {
    display: block;
    height: 80%;
    width: auto;
    object-fit: contain;
  }
`;

export const Map = ({ color }) => {
  return (
    <MapContainer color={color} >
      <h2>מפה</h2>
      <span />
      <img src={israel} alt="map" />
    </MapContainer>
  );
};

const Place = ({ name, rate, location }) => {
  return (
    <li>
      <h4>{name}</h4>
      <h4>{rate}</h4>
      <h4>{location}</h4>
    </li>
  );
};

const PlacesContainer = styled(Card)``;

export const Places = ({ color }) => {
  // Api call

  /* 
    meta data we want
        res:{[...places]}
        place:{
            name: "",
            rate: 0,
            location: "<city>"
        }
    */

  let places = [
    {
      name: "Susu",
      rate: 4,
      location: "Rishon Le Tzion",
    },
    {
      name: "Garage",
      rate: 5,
      location: "Rishon Le Tzion",
    },
    {
      name: "Hamburgigi",
      rate: 9,
      location: "Tel Aviv",
    },
    {
      name: "Hamburgigi",
      rate: 10,
      location: "Jerusalem",
    },
  ];

  // Cross With blogs places t:O(n) p:O(1)

  return (
    <PlacesContainer color={color}  className="hr">
      <h2>מקומות</h2>
      <span />
      <ul className="scroll">
        {places.map((place) => {
          return <Place {...place} key={v4()} />;
        })}
      </ul>
    </PlacesContainer>
  );
};
