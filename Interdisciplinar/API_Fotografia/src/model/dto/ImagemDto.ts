export class ImagemDto {
    id: number;
    usuarioId: number;
    caminhoArq: string;
    filtroImagem: string;

    constructor(id:number, usuarioId:number, caminhoArq:string, filtroImagem:string){
        this.id = id;
        this.usuarioId = usuarioId;
        this.caminhoArq = caminhoArq;
        this.filtroImagem = filtroImagem;
    }

}