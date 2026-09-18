import ItemLista from "@/dtos/ItemLista";
import Evento from "@/dtos/Evento";
import criarEventos from "@/CriarEventos";

const eventos: Map<string, ItemLista[]> = new Map()

eventos.set("Comunidades online", [
  new Evento(
      "Grupo do discord Campinas geek club",
      "",
      "https://discord.com/invite/f8upUKhgw9"
  ),
]);

eventos.set("Plataformas de divulgação nacional", [
  new Evento(
      "Calendário nerd: ",
      "Plataforma que permite buscar eventos da cultura geek, como feiras, convenções, encontros de cosplay, games, animes, quadrinhos e RPG.",
      "https://calendarionerd.com.br/"
  ),
  new Evento(
      "Lista de eventos do Shazam: ",
      "Página destinada a encontrar shows e eventos musicais em qualquer região.",
      "https://www.shazam.com/pt-br/events/campinas-sp-brasil"
  ),
  new Evento(
      "Redbull eventos esportivos: ",
      "Lista dos próximos eventos esportivos da redbull no Brasil.",
      "https://www.redbull.com/br-pt/events/?filter.countryCode=BR&filter.toggle.date=upcoming&filter.toggle.live=all"
  ),

  new Evento(
      "Top rated online: ",
      "Plataforma em inglês com busca avançada para locais no google maps",
      "https://www.top-rated.online/"
  ),
]);

eventos.set("Eventos pela região metropolitana de Campinas", [
  new Evento(
      "acidadeOn - Lazer e cultura",
      "",
      "https://www.acidadeon.com/campinas/lazer-e-cultura/"
  ),
  new Evento(
      "Rolê hj em Campinas: ",
      "plataforma que agrega eventos dos sites de ingressos Cheers, Sympla, Byma, Ingresse, Ticket360 e Shotgun",
      "https://rolehjemcampinas.pages.dev/"
  ),
])

export default function Home() {
  return criarEventos("", eventos, true)
}
