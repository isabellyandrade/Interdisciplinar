export class Imagem {
    id: number;
    caminhoArq: string;
    filtroImagem: string;

    constructor(id?:number, caminhoArq?:string, filtroImagem?:string){
        this.id = id || 0;
        this.caminhoArq = caminhoArq || '';
        this.filtroImagem = filtroImagem || '';
    }

}