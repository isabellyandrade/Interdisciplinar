export class ImagemRequestDto {
    usuarioId: number;
    caminhoArq: string;
    filtroImagem: string;

    constructor(usuarioId?:number, caminhoArq?:string, filtroImagem?:string){
        this.usuarioId = usuarioId || 0;
        this.caminhoArq = caminhoArq || '';
        this.filtroImagem = filtroImagem || '';
    }

}