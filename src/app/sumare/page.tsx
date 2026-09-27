import criarEventos from "@/src/domain/CriarEventos";
import json from './eventos.json'
import ItemListaFactory from "@/src/domain/dtos/ItemListaFactory";

export default function Sumare() {
    return criarEventos("Sumaré", ItemListaFactory.fromJson(json))
}
