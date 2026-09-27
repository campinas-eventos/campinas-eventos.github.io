import criarEventos from "@/src/domain/CriarEventos";
import json from './eventos.json'
import ItemListaFactory from "@/src/domain/dtos/ItemListaFactory";

export default function Valinhos() {
    return criarEventos("Valinhos", ItemListaFactory.fromJson(json))
}