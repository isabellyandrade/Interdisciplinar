export class UsuarioRequestDto{
    username: string;
    email: string;
    name: string;
    telefone: string;
    senha: string;

    constructor(username?:string, email?:string, name?:string, telefone?:string, senha?:string, dataCriacao?:string){
        this.username = username || '';
        this.email = email || '';
        this.name = name || '';
        this.telefone = telefone || '';
        this.senha = senha || '';
    }
}