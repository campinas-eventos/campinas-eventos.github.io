import criarEventos from "@/CriarEventos";
import ItemLista from "@/dtos/ItemLista";
import Evento from "@/dtos/Evento";

const eventos: Map<string, ItemLista[]> = new Map();

eventos.set("Casas de show e bares", [
    new Evento(
        "Dinossauro's Rock Bar: ",
        "bar com shows de rock ao vivo.",
        "https://www.instagram.com/dinossaurosrockbar"
    ),
    new Evento(
        "Café Tequila: ",
        "shows ao vivo e karaokê.",
        "https://www.instagram.com/tequilajundiai/"
    ),
]);

export default function Jundiai() {
    return criarEventos("Jundiaí", eventos)
}