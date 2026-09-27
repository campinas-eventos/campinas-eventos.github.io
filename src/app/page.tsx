import json from './eventos.json'
import criarEventos from "@/src/domain/CriarEventos";
import ItemListaFactory from "@/src/domain/dtos/ItemListaFactory";

export default function Home() {
  return criarEventos("", ItemListaFactory.fromJson(json))
}
