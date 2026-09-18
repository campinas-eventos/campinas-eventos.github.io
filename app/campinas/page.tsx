import ItemLista from "@/dtos/ItemLista";
import Evento from "@/dtos/Evento";
import Categoria from "@/dtos/Categoria";
import criarEventos from "@/CriarEventos";

const eventos: Map<string, ItemLista[]> = new Map()

eventos.set("Feiras e eventos culturais", [
    new Evento(
        "Centro de Convivência Cultural no Cambuí: ",
        "ponto de encontro e difusão cultural da cidade, divulgando espetáculos de teatro, concertos musicais, mostras de dança, exposições artísticas e a tradicional feira de artesanato do Cambuí.",
        "https://www.instagram.com/centrodeconvivenciacampinas/"
    ),
    new Evento(
        "Dia de Feira: ",
        "Feiras livres de cultura urbana.",
        "https://www.instagram.com/feira.diade/"
    ),
    new Evento(
        "Espaço Cultural Veneza: ",
        "divulgação e organização de eventos focados em atividades artísticas e culturais, incluindo espetáculos de teatro, oficinas formativas, saraus e mostras artísticas.",
        "https://www.instagram.com/veneza.campinas"
    ),
    new Evento(
        "Feira Cult: ",
        "projeto cultural independente com eventos focados na valorização da arte autoral, economia criativa e pequenos produtores locais, reunindo feira livre, exposições, oficinas gratuitas e pintura ao vivo.",
        "https://www.instagram.com/feira.cult"
    ),
    new Evento(
        "Sala dos Toninhos: ",
        "ponto de cultura e resistência localizado no complexo da Estação Cultura.",
        "https://www.instagram.com/saladostoninhos/"
    ),
    new Evento(
        "Sesc Campinas: ",
        "oferece uma programação voltada ao bem-estar e ao desenvolvimento social, reunindo shows musicais, espetáculos de teatro e dança, exibições de cinema, oficinas formativas, atividades literárias, além de vivências de lazer, esportes e saúde para todas as idades.",
        "https://www.sescsp.org.br/programacao/?id=29&unidade=Campinas"
    ),
    new Evento(
        "Teatro Oficina do Estudante: ",
        "oferece uma programação cultural que destaca espetáculos infantis, musicais, comédias e shows de stand-up comedy.",
        "https://www.teatrooficinadoestudante.com.br/atracoes/"
    ),
    new Categoria(
        "Cinema",
        [
            new Evento(
                "Cineclube Terracota: ",
                "programação e bastidores de um projeto cultural de exibições gratuitas de filmes e debates realizado na Cidade Universitária",
                "https://www.instagram.com/cineclubeterracota"
            ),
            new Evento(
                "Museu de Imagem e Som (MIS): ",
                "espaço com exibição quase diária de filmes gratuitos e exposições artísticas.",
                "https://www.instagram.com/mis.campinas/"
            ),
        ]
    )
]);

eventos.set("Páginas de divulgação", [
    new Evento(
        "baileyarte: ",
        "divulgação de shows e eventos alternativos por Campinas e região.",
        "https://www.instagram.com/baileyarte_/"
    ),
    new Evento(
        "Calendário de eventos da Prefeitura de Campinas",
        "",
        "https://www.campinas.sp.gov.br/eventos"
    ),
    new Evento(
        "Campinas.com.br: ",
        "Agenda cultural e de lazer de Campinas e região, com eventos de teatro, shows, exposições, cinema, turismo, gastronomia, esporte e atividades para crianças.",
        "https://campinas.com.br/agenda/"
    ),
    new Evento(
        "Campinas Cultura e Turismo: ",
        "perfil oficial do instagram da Secretaria de Cultura e Turismo de Campinas",
        "https://www.instagram.com/campinas.culturaturismo/"
    ),
    new Evento(
        "OMG Cultural: ",
        "coletivo e espaço cultural independente, atua há mais de 12 anos na promoção da inclusão social, economia solidária e arte urbana na periferia.",
        "https://www.instagram.com/omgcultural/"
    ),
    new Categoria(
        "Eventos específicos", [
            new Evento(
                "Essence 808: ",
                "festa de Black Charme",
                "https://www.instagram.com/essence__808/"
            ),
            new Evento(
                "O Som de Preto: ",
                "projeto e festival cultural voltado à valorização da música preta. Foca em ritmos como charme, hip hop, R&B, rap e trap",
                "https://www.instagram.com/osomdepreto/"
            ),
            new Evento(
                "Samba Rock Estação: ",
                "projeto cultural e escola de dança focado na valorização e difusão da cultura preta. Promove aulas regulares de samba-rock e grandes bailes nostálgicos com shows e DJs convidados.",
                "https://www.instagram.com/sambarockestacao"
            ),
        ]
    )
]);

eventos.set("Casas de show e bares", [
    new Evento(
        "CAOS: ",
        "um dos maiores clubes de música eletrônica do interior de SP",
        "https://www.instagram.com/caoscampinas/"
    ),
    new Evento(
        "Club 88: ",
        "festas, shows ao vivo, festas pop, eletrônicas e noites temáticas.",
        "https://www.instagram.com/club88oficial/"
    ),
    new Evento(
        "Jimmy Rocker: ",
        "rock ao vivo.",
        "https://www.instagram.com/jimmyrockerbar/"
    ),
    new Evento(
        "Noturna Club: ",
        "Casa com estética gótica/dark • atmosfera imersiva • rolê alternativo",
        "https://www.instagram.com/noturnaclub/"
    ),
    new Evento(
        "Pista 2002: ",
        "casa de shows na Fazenda Santa Cândida com pista de skate, gastronomia, campeonatos e eventos musicais.",
        "https://www.instagram.com/pista2002/"
    ),

    new Evento(
        "Woodstock Music Bar: ",
        "casa de shows no Jardim Chapadão com eventos de rock e metal, além de festas alternativas voltadas para a cultura geek, gótica, nostalgia de décadas passadas e flashback.",
        "https://www.instagram.com/woodstock_music_bar/"
    ),
    new Categoria("Barão Geraldo", [
        new Evento(
            "Barbieri Casa de Samba: ",
            "casa de shows com rodas de samba, apresentações de pagode e shows de artistas.",
            "https://www.instagram.com/barbieri_casadesamba/"
        ),
        new Evento(
            "Brasuca Multicultural: ",
            "casa de shows com MPB, pop, rock, reggae, forró e festas nostálgicas.",
            "https://www.instagram.com/brasucamulticultural/"
        ),
    ]),

    new Categoria("Cambuí/Taquaral/Centro", [
        new Evento(
            "Alma Campinas: ",
            "bar no Cambuí com música variada, incluindo jazz, bossa nova, samba, soul, black music, R&B e funky soul.",
            "https://www.instagram.com/almacampinas"
        ),
        new Evento(
            "Alma Grey Bowl: ",
            "bar no Novo Taquaral com pista de skate interna, música, gastronomia e cultura urbana.",
            "https://www.instagram.com/almagreybowl/"
        ),
        new Evento(
            "Grafia Bar: ",
            "bar no Cambuí focado em música eletrônica, funk e outros ritmos.",
            "https://www.instagram.com/grafiabar/"
        ),
    ]),
]);

eventos.set("Cultura geek & otaku", [
    new Evento(
        "Anime Geek Eventos: ",
        "divulga um festival de cultura pop na região, organizando grandes encontros periódicos que reúnem concursos de cosplay, apresentações e dança K-Pop, arenas de games, feira de expositores e atividades abertas para o público otaku e nerd.",
        "https://www.instagram.com/animegeek.eventos/"
    ),

    new Evento(
        "Calendário nerd: ",
        "plataforma que permite buscar eventos da cultura geek, como feiras, convenções, encontros de cosplay, games, animes, quadrinhos e RPG.",
        "https://calendarionerd.com.br/"
    ),
    new Evento(
        "Nipo Campinas: ",
        "Instituto Cultural Nipo Brasileiro de Campinas",
        "https://www.instagram.com/nipocampinas/"
    ),

    new Categoria("RPG", [
        new Evento(
            "Clube Lúdico: ",
            "luderia e espaço de convivência com jogos de tabuleiro, promovendo o aluguel de títulos, comidas e bebidas para acompanhar as partidas, além de organizar encontros temáticos de RPG, campeonatos e grandes eventos mensais de jogatina abertos ao público.",
            "https://www.instagram.com/clubeludico"
        ),
        new Evento(
            "Espaço ARCS: ",
            "luderia e espaço de convivência com jogos de tabuleiro, promovendo o aluguel de títulos, comidas e bebidas para acompanhar as partidas, além de organizar encontros temáticos de RPG, campeonatos e grandes eventos mensais de jogatina abertos ao público.",
            "https://www.instagram.com/espacoarcs"
        ),
        new Evento(
            "MuitoColecionaveis Boardgames: ",
            "hamburgueria, luderia e loja de card games. Promove um espaço com aluguel de jogos de tabuleiro, campeonatos oficiais de TCG e encontros de jogatina.",
            "https://www.instagram.com/muito_colecionaveis"
        ),
        new Evento(
            "Refúgio do RPG: ",
            "perfil no Instagram dedicado à divulgação de atividades, encontros e conteúdos relacionados a RPG de mesa.",
            "https://www.instagram.com/refugiodorpg_oficial"
        ),
    ]),
]);

export default function Campinas() {
    return criarEventos("Campinas", eventos)
}