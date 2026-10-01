"use client";

import dynamic from "next/dynamic";
import "./mapa.css";

const Mapa = dynamic(() => import("@/components/Mapa"), {
    ssr: false,
    loading: () => <div className="mapa-loading" role="status">Carregando mapa...</div>,
});

export default function MapaPage() {
    return (
        <section className="mapa-page" aria-labelledby="mapa-title">
            <h1 id="mapa-title">Mapa</h1>
            <Mapa />
        </section>
    );
}