import ItemLista from "@/src/domain/dtos/ItemLista";

export default class Evento extends ItemLista {

    descricao: string;
    url: string;
    categorias: string[]

    constructor(titulo: string, descricao: string, url: string, categorias: string[]) {
        super(titulo);
        this.descricao = descricao
        this.url = url
        this.categorias = categorias
    }

    static fromJson(json: any): Evento {
        return new Evento(
            json.nome,
            json.descricao,
            json.link,
            json.categorias ?? []
        )
    }
}