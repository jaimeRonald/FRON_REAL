import { GoogleMap, LoadScript ,Marker  } from '@react-google-maps/api';

import { useEffect } from 'react';
import GoogleMapsHelper from '../helpers/GoogleMapsHelper';

export const Geolocalizacion = () => {
  useEffect(() => {
    const googleMapsHelper = new GoogleMapsHelper("TU_API_KEY");
    
    googleMapsHelper.loadMapScript()
      .then(() => {
        const mapContainer = document.getElementById("map");
        const defaultCenter = { lat: -34.5956145, lng: -58.4431949 };

        const mapOptions = {
          zoom: 10,
          center: defaultCenter,
        };

        const map = googleMapsHelper.createMap(mapContainer, mapOptions);
        googleMapsHelper.createMarker(map, defaultCenter);
      })
      .catch((error) => {
        console.error("Error loading Google Maps script:", error);
      });
  }, []);

  return <div id="map" style={{ height: '400px', width: '100%' }} />;
};

