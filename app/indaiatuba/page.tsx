import criarEventos from "@/CriarEventos";
import ItemLista from "@/dtos/ItemLista";
import Evento from "@/dtos/Evento";

const eventos: Map<string, ItemLista[]> = new Map();
eventos.set("Feiras e eventos culturais", [
    new Evento(
        "Secretaria de Cultura de Indaiatuba: ",
        "Perfil oficial da Secretaria de Cultura de Indaiatuba.",
        "https://www.instagram.com/culturaindaiatubaoficial/"
    ),
]);

export default function Indaiatuba() {
    return criarEventos("Indaiatuba", eventos)
}