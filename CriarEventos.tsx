import ItemLista from "@/dtos/ItemLista";
import Evento from "@/dtos/Evento";
import Categoria from "@/dtos/Categoria";

export default function criarEventos(
    titulo: string,
    eventos: Map<string, ItemLista[]>,
    itemExpandido: boolean = false
): React.ReactNode {
    return <main>
        {titulo !== "" ? <h2>{titulo}</h2> : null}

        {Array.from(eventos.entries()).map(([titulo, itens]) => (
            <details key={titulo} className="lista-recolhivel" open={itemExpandido}>
                <summary>{titulo}</summary>
                <ul className="lista-eventos">
                    {itens.map((item) => {
                            if (item instanceof Evento) {
                                return <li key={item.url}>
                                    <a href={item.url}>{item.titulo}</a>{item.descricao}
                                </li>
                            } else if (item instanceof Categoria) {
                                return <li key={item.titulo}>
                                    <p>{item.titulo}</p>
                                    <ul>
                                        {item.eventos.map((evento) => (
                                            <li key={evento.url}>
                                                <a href={evento.url}>{evento.titulo}</a>{evento.descricao}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            }
                            return null
                        }
                    )}
                </ul>
            </details>
        ))}
    </main>
}