import ItemLista from "@/dtos/ItemLista";

export default class Evento extends ItemLista {

    descricao: string;
    url: string;

    constructor(titulo: string, descricao: string, url: string) {
        super(titulo);
        this.descricao = descricao
        this.url = url
    }
}