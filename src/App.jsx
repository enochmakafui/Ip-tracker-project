import React, { useState, useRef,useEffect   } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMap } from 'react-leaflet/hooks'
import Header from './header';
import Details from './details';

const RecenterAutomatically = ({lat,lng}) => {
  const map = useMap();
   useEffect(() => {
     map.setView([lat, lng]);
   }, [lat, lng]);
   return null;
 }
const App = () => {
  const [position, setPosition] = useState([37.40599, -122.078514]);
  const [IpAddress, setIpAddress] = useState("");
  const [done, setDone] = useState(false);
  const mapRef = useRef(null); // Create a ref for the map

  function handleApi(Ip) {
    setIpAddress(Ip);
    setDone(!done);
  }

  function handleData(data) {
    const { lat, lng } = data.location;
    setPosition([lat, lng]);

    // Manually set the map's center
    if (mapRef.current) {
      mapRef.current.setView([lat, lng], 13);
    }
    setDone(!done)
  }

  return (

    <div className="relative w-full">
      <Header callApi={handleApi} />
      <Details IpAddress={IpAddress} call={done} handleData={handleData} />
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className=' z-0'
        whenCreated={map => (mapRef.current = map)} // Set the mapRef
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <RecenterAutomatically lat={position[0]} lng={position[1]} />

      </MapContainer>
    </div>

  );
}

export default App;
