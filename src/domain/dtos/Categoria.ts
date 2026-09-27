import Evento from "@/src/domain/dtos/Evento";
import ItemLista from "@/src/domain/dtos/ItemLista";

export default class Categoria extends ItemLista {
    eventos: Evento[]

    constructor(titulo: string, eventos: Evento[]) {
        super(titulo)
        this.eventos = eventos
    }

    static fromJson(json: any): Categoria {
        return new Categoria(
            json.nome,
            json.itens.map((item: any) => Evento.fromJson(item))
        )
    }
}