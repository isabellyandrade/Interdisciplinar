export class Imagem {
    id: number;
    usuarioId: number;
    caminhoArq: string;
    filtroImagem: string;

    constructor(id?:number, usuarioId?:number, caminhoArq?:string, filtroImagem?:string){
        this.id = id || 0;
        this.usuarioId = usuarioId || 0;
        this.caminhoArq = caminhoArq || '';
        this.filtroImagem = filtroImagem || '';
    }

}