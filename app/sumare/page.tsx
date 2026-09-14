import ItemLista from "@/dtos/ItemLista";
import Evento from "@/dtos/Evento";
import criarEventos from "@/CriarEventos";

const eventos: Map<string, ItemLista[]> = new Map();

eventos.set("Casas de show e bares", [
    new Evento(
        "Fox Pub: ",
        " open bar, festas temáticas e shows com DJs e atrações regionais.",
        "https://www.instagram.com/fox.pubb/"
    ),
    new Evento(
        "Hangar 888: ",
        "bar no centro da cidade, focado em baladas e camarotes.",
        "https://www.instagram.com/hangar888bar/"
    ),
    new Evento(
        "Le Vive Boulevard: ",
        "centro comercial com shows ao vivo e diversas opções gastronômicas.",
        "https://www.instagram.com/leviveboulevard/"
    ),
]);

eventos.set("Feiras e eventos culturais", [
    new Evento(
        "Secretaria de Cultura e Turismo de Sumaré: ",
        "perfil oficial que centraliza a divulgação de feiras artesanais, como a Feira Artes & Sabores e a Feira Sarau Cultural, além de grandes festas públicas na Praça das Bandeiras.",
        "https://www.instagram.com/culturasumare/"
    ),

    new Evento(
        "Festival Curta Cenas: ",
        "principal festival de peças de teatro curtas da cidade, reunindo artistas locais e nacionais.",
        "https://www.instagram.com/curtacenas_sumare/"
    ),
]);

export default function Sumare() {
    return criarEventos("Sumaré", eventos)
}
