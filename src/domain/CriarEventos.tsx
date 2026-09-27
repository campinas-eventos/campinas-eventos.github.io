import ItemLista from "@/src/domain/dtos/ItemLista";
import Evento from "@/src/domain/dtos/Evento";
import React from "react";
import ListaLocais from "@/src/presentation/components/ListaLocais/ListaLocais";

export default function criarEventos(
    titulo: string,
    eventos: Map<string, ItemLista[]>,
): React.ReactNode {
    const eventosLista: Evento[] = []
    Array.from(eventos.entries()).forEach((entry) => {
        const adicionar = entry[1].filter((e) => e instanceof Evento)
        eventosLista.push(...adicionar)
    })

    eventosLista.sort((a, b) => a.titulo.localeCompare(b.titulo))

    return (
        <main>
            {titulo !== "" && <h2>{titulo}</h2>}
            <ListaLocais eventos={eventosLista} />
        </main>
    );
}