import criarEventos from "@/src/domain/CriarEventos";
import json from './eventos.json'
import ItemListaFactory from "@/src/domain/dtos/ItemListaFactory";

export default function Piracicaba() {
    return criarEventos("Piracicaba", ItemListaFactory.fromJson(json))
}