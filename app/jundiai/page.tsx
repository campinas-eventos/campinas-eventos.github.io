import criarEventos from "@/CriarEventos";
import json from './eventos.json'
import ItemListaFactory from "@/dtos/ItemListaFactory";

export default function Jundiai() {
    return criarEventos("Jundiaí", ItemListaFactory.fromJson(json))
}