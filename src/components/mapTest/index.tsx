import React from "react";
import Map from "react-map-gl"
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoieWl5aWRhNzY4NiIsImEiOiJjbGJ5cmE0cmMwdDM3M3BvNTZua2liMWtrIn0.LpBBB8ZLJZX5kHD9VL54MA';

const MapTest = () => {
  return (
    <div>
      <Map
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14
        }}
        style={{width: 600, height: 400}}
        mapStyle="mapbox://styles/mapbox/streets-v12?access_token=pk.eyJ1IjoieWl5aWRhNzY4NiIsImEiOiJjbGJ5cmE0cmMwdDM3M3BvNTZua2liMWtrIn0.LpBBB8ZLJZX5kHD9VL54MA"
      />
    </div>
  );
};

export default MapTest;