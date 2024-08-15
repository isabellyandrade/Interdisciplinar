export class Galeria{
    id: number;
    name: string;
    imagemId: number;
    usuarioId: number;

    constructor(id?:number, name?:string, imagemId?:number, usuarioId?:number){
        this.id = id || 0;
        this.name = name || '';
        this.imagemId = imagemId || 0;
        this.usuarioId = usuarioId || 0;
    }
}