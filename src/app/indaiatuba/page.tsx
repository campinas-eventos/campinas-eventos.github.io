import criarEventos from "@/src/domain/CriarEventos";
import json from './eventos.json'
import ItemListaFactory from "@/src/domain/dtos/ItemListaFactory";

export default function Indaiatuba() {
    return criarEventos("Indaiatuba", ItemListaFactory.fromJson(json))
}