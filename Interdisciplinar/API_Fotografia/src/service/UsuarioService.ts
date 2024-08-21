import { Usuario } from "../model/Usuario";
import { UsuarioRepository } from "../repository/UsuarioRepository";

export class UsuarioService{

    usuarioRepository = UsuarioRepository.getInstance();

    async cadastrarUsuario(userData: any): Promise<Usuario> {
        const {username, email, name, telefone, senha} = userData;
        if(!username || !email || !name || !telefone || !senha){
            throw new Error("Informações incompletas");
        }
        const usuarios: Usuario[] = await this.usuarioRepository.getUsuarioPorIdOuUsernameOuEmailOuTelefone(undefined, username, undefined, undefined); 
        if(usuarios.length > 0){
            throw new Error("Username já existe");
        }
        return this.usuarioRepository.insertUsuario(new Usuario(undefined, username, email, name, telefone, senha));
    }

    async atualizarUsuario(userData: Usuario): Promise<Usuario> {
        const usuario = new Usuario(userData.id, userData.email, userData.name, userData.telefone, userData.senha);
        if (!(usuario instanceof Usuario)) {
            throw new Error("O parâmetro passado não é um objeto do tipo Usuario");
        }

        this.usuarioRepository.updateUsuario(usuario);
        return usuario;
    }

    async deletarUsuario(userData: Usuario): Promise<Usuario> {
        const usuario = new Usuario(userData.id, userData.email, userData.name, userData.telefone, userData.senha, userData.dataCriacao);
        if (!(usuario instanceof Usuario)) {
            throw new Error("O parâmetro passado não é um objeto do tipo Usuario");
        }
        const result:any = await this.usuarioRepository.deleteUsuario(usuario);
        if (result.affectedRows == 0) {
            throw new Error("Usuario não encontrado.");
        }
        return usuario;
    }

    async getUsuario(id: any, username: any, email: any, telefone: any): Promise<Usuario|null> {
        const idNumber: number = parseInt(id,10);

        const result:Usuario[] = await this.usuarioRepository.getUsuarioPorIdOuUsernameOuEmailOuTelefone(idNumber, username, email, telefone);
        if(result.length > 0){
            return result[0];
        }
        return null
    }

    async getTodosUsuario():Promise<Usuario[]>{
        return this.usuarioRepository.listaUsuario();
    }
}