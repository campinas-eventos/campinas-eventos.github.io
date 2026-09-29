import json from './eventos.json'
import criarEventos from "@/CriarEventos";
import ItemListaFactory from "@/dtos/ItemListaFactory";

export default function Limeira() {
    const eventos = ItemListaFactory.fromJson(json)
    return criarEventos("Limeira", eventos)
}