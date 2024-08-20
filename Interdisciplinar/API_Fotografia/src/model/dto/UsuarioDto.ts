export class UsuarioDto{
    id: number;
    username: string;
    email: string;
    name: string;
    telefone: string;
    senha: string;
    dataCriacao: string;

    constructor(id:number, username:string, email:string, name:string, telefone:string, senha:string, dataCriacao:string){
        this.id = id;
        this.username = username;
        this.email = email;
        this.name = name;
        this.telefone = telefone;
        this.senha = senha;
        this.dataCriacao = dataCriacao;
    }
}