import json from './eventos.json'
import criarEventos from "@/src/domain/CriarEventos";
import ItemListaFactory from "@/src/domain/dtos/ItemListaFactory";

export default function Campinas() {
    const eventos = ItemListaFactory.fromJson(json)
    return criarEventos("Campinas", eventos)
}