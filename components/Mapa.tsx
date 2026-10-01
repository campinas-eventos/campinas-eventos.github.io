"use client";

import {Icon, type LatLngBoundsLiteral, type LatLngTuple} from "leaflet";
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    ZoomControl,
} from "react-leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIconRetina from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import "leaflet/dist/leaflet.css";

import limeira from "../app/limeira/eventos.json";
import sumare from "../app/sumare/eventos.json"
import campinas from "../app/campinas/eventos.json"

const south = -23.2991826;
const north = -22.52231;
const west = -47.4821817;
const east = -46.5211162;

const bounds: LatLngBoundsLiteral = [
    [south, west],
    [north, east],
];

type Local = {
    tipo: string;
    nome: string;
    descricao: string;
    link: string;
    coordenadas?: [number, number];
    categoria: string;
};

const pinIcon = new Icon({
    iconUrl: typeof markerIcon === "string" ? markerIcon : markerIcon.src,
    iconRetinaUrl:
        typeof markerIconRetina === "string"
            ? markerIconRetina
            : markerIconRetina.src,
    shadowUrl:
        typeof markerShadow === "string" ? markerShadow : markerShadow.src,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

function obterLocais(local: any): Local[] {
    const locais = Object.entries(local).flatMap(([categoria, locais]: [string, any]) =>
        locais.filter((local: any) => local.coordenadas !== undefined).map((local: any) => ({
            ...local,
            categoria,
        }))
    ) as Local[];

    const categorias: Local[] = []

    Object.entries(local).forEach(([categoria, locais]: [string, any]) =>
        locais.filter((local:any) => local.tipo === "categoria").forEach((local: any) => {
            local.itens.filter((itemCategoria: any) => itemCategoria.coordenadas !== undefined).forEach((itemCategoria: any) => {
                categorias.push({
                    ...itemCategoria,
                    categoria
                })
            })
        })
    );
    return [...locais, ...categorias]
}

export default function Mapa() {
    const limeiraLocais = obterLocais(limeira);
    const sumareLocais = obterLocais(sumare)
    const campinasLocais = obterLocais(campinas)

    const totalLocais = [...limeiraLocais, ...sumareLocais, ...campinasLocais]

    return (
        <MapContainer
            className="mapa"
            bounds={bounds}
            boundsOptions={{padding: [24, 24]}}
            zoomControl={false}
            scrollWheelZoom={true}
            dragging={true}
            doubleClickZoom={true}
            touchZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <ZoomControl position="bottomright"/>

            {totalLocais.map((local) => {
                    if (local.coordenadas === undefined) return null
                    return (
                        <Marker
                            key={`${local.nome}-${local.coordenadas.join("-")}`}
                            position={local.coordenadas as LatLngTuple}
                            icon={pinIcon}
                            title={local.nome}
                            riseOnHover
                        >
                            <Popup
                                className="popup-google"
                                closeButton={true}
                                autoPan={true}
                                maxWidth={280}
                            >
                                <div className="popup-conteudo">
                                    <h3>{local.nome}</h3>

                                    <p style={{margin: 0}}>{local.descricao}</p>
                                    <br/>
                                    <a
                                        href={local.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Página
                                    </a>
                                    &nbsp;-&nbsp;
                                    <a
                                        href={`https://www.google.com/maps/dir/?api=1&origin=&destination=${local.coordenadas[0]}%2C${local.coordenadas[1]}&travelmode=driving`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Como chegar
                                    </a>
                                </div>
                            </Popup>
                        </Marker>
                    )
                }
            )}
        </MapContainer>
    );
}
