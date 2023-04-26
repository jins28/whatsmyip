import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
export default function CurrentLocation(props){
    //const position = [51.505, -0.09]
    const position =[props.latitude,props.longitude]
    
    
    return (
      <div>
<MapContainer center={[51.505, -0.09]} zoom={5} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  
  <Marker position={position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
    <Popup>
      {props.city} <br /> {props.state}
    </Popup>
  </Marker>
</MapContainer>
</div>
    );
}