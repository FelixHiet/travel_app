import React from "react";

const PlaceDetails = ({ place }) => {
  return <h1>{place.name}</h1>;
};

export default PlaceDetails;

/*

import React from 'react'

const PlaceDetails = ({ place }) => {
  return (
    <h1>{place.name}</h1> // takes the name from the List.jsx const places
  )
}

export default PlaceDetails

*/
