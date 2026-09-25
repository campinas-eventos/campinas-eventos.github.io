import criarEventos from "@/CriarEventos";
import json from './eventos.json'
import ItemListaFactory from "@/dtos/ItemListaFactory";

export default function Sumare() {
    return criarEventos("Sumaré", ItemListaFactory.fromJson(json))
}
