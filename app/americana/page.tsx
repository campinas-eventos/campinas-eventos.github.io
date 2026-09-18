import criarEventos from "@/CriarEventos";
import ItemLista from "@/dtos/ItemLista";
import Evento from "@/dtos/Evento";

const eventos: Map<string, ItemLista[]> = new Map();

eventos.set("Feiras e eventos culturais", [
    new Evento(
        "Fábrica das Artes: ",
        "Espetáculos, apresentações e aulas de teatro.",
        "https://www.instagram.com/fabricadas.artes/"
    ),
])

eventos.set("Casas de show e bares", [
    new Evento(
        "Vibes Americana: ",
        "pista com música alternativa.",
        "https://www.instagram.com/vibes.americana/"
    ),
]);

export default function Americana() {
    return criarEventos("Americana", eventos)
}