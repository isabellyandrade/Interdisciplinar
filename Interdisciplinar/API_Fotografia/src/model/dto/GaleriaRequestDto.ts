export class GaleriaRequestDto{
    name: string;
    imagemId: number;
    usuarioId: number;

    constructor(name?:string, imagemId?:number, usuarioId?:number){
        this.name = name || '';
        this.imagemId = imagemId || 0;
        this.usuarioId = usuarioId || 0;
    }
}