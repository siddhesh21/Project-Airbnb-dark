import ReactMapGL from "react-map-gl";
import { useState } from "react";
import getCenter from "geolib/es/getCenter";

function Map({ searchResults }) {
  //   Transforming the searchResults DEMO API object into geolib required format

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  {
    /**console.log(coordinates); */
  }

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/siddheshkankekar/cks0taj9t1m3617lfxn44bk9v"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    ></ReactMapGL>
  );
}

export default Map;
