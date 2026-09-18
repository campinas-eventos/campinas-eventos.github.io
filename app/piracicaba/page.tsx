import criarEventos from "@/CriarEventos";
import ItemLista from "@/dtos/ItemLista";
import Evento from "@/dtos/Evento";

const eventos: Map<string, ItemLista[]> = new Map();

eventos.set("Casas de show e bares", [
    new Evento(
        "Barley’s Vila: ",
        "Chopperia e hamburgueria com shows de música ao vivo",
        "https://www.instagram.com/barleys_vila/"
    ),
]);

export default function Piracicaba() {
    return criarEventos("Piracicaba", eventos)
}