"use client";

import {useState} from "react";
import {Icon, type LatLngBoundsLiteral, type LatLngTuple} from "leaflet";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIconRetina from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";

const south = -23.2991826;
const north = -22.52231;
const west = -47.4821817;
const east = -46.5211162;

const bounds: LatLngBoundsLiteral = [[south, west], [north, east]];

const pinIcon = new Icon({
    iconUrl: typeof markerIcon === "string" ? markerIcon : markerIcon.src,
    iconRetinaUrl: typeof markerIconRetina === "string" ? markerIconRetina : markerIconRetina.src,
    shadowUrl: typeof markerShadow === "string" ? markerShadow : markerShadow.src,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

export default function Mapa() {
    const [position] = useState<LatLngTuple>(() => [-22.898861455295997, -47.08503763346707]);
    const [position2] = useState<LatLngTuple>(() => [-22.817830220426853, -47.09912663700204]);

    return (
        <MapContainer className="mapa" bounds={bounds} boundsOptions={{padding: [24, 24]}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={pinIcon} title="Local sorteado" alt="Pin do local sorteado">
                <Popup>Woodstock Music Bar</Popup>
            </Marker>
            <Marker position={position2} icon={pinIcon} title="Local sorteado" alt="Pin do local sorteado">
                <Popup>Barbieri Casa de Samba</Popup>
            </Marker>
        </MapContainer>
    );
}