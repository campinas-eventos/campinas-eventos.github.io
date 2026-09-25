import criarEventos from "@/CriarEventos";
import json from './eventos.json'
import ItemListaFactory from "@/dtos/ItemListaFactory";

export default function Piracicaba() {
    return criarEventos("Piracicaba", ItemListaFactory.fromJson(json))
}