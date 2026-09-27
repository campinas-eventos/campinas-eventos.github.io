import criarEventos from "@/src/domain/CriarEventos";
import json from './eventos.json'
import ItemListaFactory from "@/src/domain/dtos/ItemListaFactory";

export default function Jundiai() {
    return criarEventos("Jundiaí", ItemListaFactory.fromJson(json))
}