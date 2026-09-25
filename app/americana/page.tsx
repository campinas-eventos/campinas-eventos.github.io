import criarEventos from "@/CriarEventos";
import json from './eventos.json'
import ItemListaFactory from "@/dtos/ItemListaFactory";

export default function Americana() {
    return criarEventos("Americana", ItemListaFactory.fromJson(json))
}