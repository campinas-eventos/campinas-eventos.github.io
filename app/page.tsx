import json from './eventos.json'
import criarEventos from "@/CriarEventos";
import ItemListaFactory from "@/dtos/ItemListaFactory";

export default function Home() {
  return criarEventos("", ItemListaFactory.fromJson(json), true)
}
