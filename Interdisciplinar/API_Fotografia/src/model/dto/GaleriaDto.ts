export class GaleriaDto{
    id: number;
    name: string;
    imagemId: number;
    usuarioId: number;

    constructor(id:number, name:string, imagemId:number, usuarioId:number){
        this.id = id;
        this.name = name;
        this.imagemId = imagemId;
        this.usuarioId = usuarioId;
    }
}