import burger from "../../../resorces/burger.svg";
import israel from "../../../resorces/white-israel-map.svg";
import { v4 } from "uuid";

export const About = () => {
  return (
    <div className="About card hr">
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
    </div>
  );
};

export const Top5 = () => {
  return (
    <div className="Top card eng">
      <h2>Top 5</h2>
      <span />
      <ol>
        <li>susu</li>
        <li>garage</li>
        <li>hamburgigi</li>
        <li>what</li>
        <li>yup</li>
      </ol>
    </div>
  );
};

export const Calender = () => {
  return (
    <div className="Calender card hr">
      <h2>לוח שנה</h2>
    </div>
  );
};

export const News = () => {
  return (
    <div className="News card hr">
      <h2>חדשות</h2>
    </div>
  );
};

export const Map = () => {
  return (
    <div className="Map card">
      <h2>Map</h2>
      <span />
      <img src={israel} alt="map" />
    </div>
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

export const Places = () => {
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
    <div className="Places card hr">
      <h2>מקומות</h2>
      <span />
      <ul className="scroll">
        {places.map((place) => {
          return <Place {...place} key={v4()} />;
        })}
      </ul>
    </div>
  );
};
