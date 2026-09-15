import criarEventos from "@/CriarEventos";
import ItemLista from "@/dtos/ItemLista";
import Evento from "@/dtos/Evento";

const eventos: Map<string, ItemLista[]> = new Map();
eventos.set("Casas de show e bares", [
    new Evento(
        "Ame Club: ",
        "clube de música eletrônica.",
        "https://www.instagram.com/ame.club/"
    ),
    new Evento(
        "Laroc Club: ",
        "clube de música eletrônica.",
        "https://www.instagram.com/larocclub/"
    ),
]);

export default function Valinhos() {
    return criarEventos("Valinhos", eventos)
}