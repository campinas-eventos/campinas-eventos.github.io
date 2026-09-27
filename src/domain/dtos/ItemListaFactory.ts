import Evento from "@/src/domain/dtos/Evento";
import ItemLista from "@/src/domain/dtos/ItemLista";
import Categoria from "@/src/domain/dtos/Categoria";

export default class ItemListaFactory {
    static fromJson(dados: Record<string, unknown[]> | string) {
        const resultado = new Map<string, ItemLista[]>();

        const json: Record<string, unknown[]> =
            typeof dados === "string"
                ? JSON.parse(dados)
                : dados;

        Object.keys(json).forEach((chave) => {
            const itens: ItemLista[] = [];

            json[chave].forEach((item) => {
                const dado = item as { tipo?: string };

                if (dado.tipo === "evento") {
                    itens.push(Evento.fromJson(item));
                }
                else if (dado.tipo === "categoria") { itens.push(Categoria.fromJson(item)) }
            });

            resultado.set(chave, itens);
        });

        return resultado;
    }
}
