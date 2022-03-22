import React from "react";
import GoogleMapReact from 'google-map-react';
import { FaMapMarker } from "react-icons/fa";

const LocationPin = ({ text }) => (
  <div className="pin">
    <FaMapMarker className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

function GoogleMap({ location, zoomLevel }){

  return (
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC-UCFLZbN_ZHYhf7K9fZNMWmx3_95qZhc' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  );
}
export default GoogleMap