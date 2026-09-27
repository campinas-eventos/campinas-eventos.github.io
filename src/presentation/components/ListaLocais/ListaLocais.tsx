import React from "react";
import './ListaLocais.css'
import Evento from "@/src/domain/dtos/Evento";

type ListaLocaisProps = {
    eventos: Evento[];
};

export default function ListaLocais({eventos}: ListaLocaisProps) {
    return (
        <ul className="lista-eventos">
            {eventos.map((evento) => (
                <li key={evento.url}>
                    <div className="evento-cabecalho">
                        <a href={evento.url}>{evento.titulo}</a>

                        <div className="categorias">
                            {(evento.categorias ?? []).map((categoria) => (
                                <span className="categoria" key={categoria}>
                                    {categoria}
                                </span>
                            ))}
                        </div>
                    </div>

                    <span className="descricao">
                        {evento.descricao}
                    </span>
                </li>
            ))}
        </ul>
    );
}
