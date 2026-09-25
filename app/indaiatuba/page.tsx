import criarEventos from "@/CriarEventos";
import json from './eventos.json'
import ItemListaFactory from "@/dtos/ItemListaFactory";

export default function Indaiatuba() {
    return criarEventos("Indaiatuba", ItemListaFactory.fromJson(json))
}