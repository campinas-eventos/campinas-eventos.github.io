import criarEventos from "@/CriarEventos";
import json from './eventos.json'
import ItemListaFactory from "@/dtos/ItemListaFactory";

export default function Valinhos() {
    return criarEventos("Valinhos", ItemListaFactory.fromJson(json))
}