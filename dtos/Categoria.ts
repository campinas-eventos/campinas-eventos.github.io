import Evento from "@/dtos/Evento";
import ItemLista from "@/dtos/ItemLista";

export default class Categoria extends ItemLista {
    eventos: Evento[]

    constructor(titulo: string, eventos: Evento[]) {
        super(titulo)
        this.eventos = eventos
    }
}