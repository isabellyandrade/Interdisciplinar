import { executarComandoSQL } from "../database/mysql";
import { Usuario } from "../model/Usuario";

export class UsuarioRepository{

    private static instance: UsuarioRepository;

    private constructor() {
        this.createTable();
    }

    public static getInstance(): UsuarioRepository {
        if (!this.instance) {
            this.instance = new UsuarioRepository();
        }
        return this.instance
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS fotografia.Usuario (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            name VARCHAR(255) NOT NULL,
            telefone CHAR(11) NOT NULL,
            senha VARCHAR(255) NOT NULL,
            dtCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;
        try {
            const resultado =  await executarComandoSQL(query, []);
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertUsuario(usuario: Usuario) :Promise<Usuario>{
        const query = "INSERT INTO fotografia.Usuario (username, email, name, telefone, senha) VALUES (?, ?, ?, ?, ?)" ;

        try {
            const resultado = await executarComandoSQL(query, [usuario.username, usuario.email, usuario.name, usuario.telefone, usuario.senha]);
            console.log('Usuario criado com sucesso:', resultado.insertId);
            usuario.id = resultado.insertId;
            return usuario;

        } catch (err) {
            console.error('Erro ao criar novo usuario:', err);
            throw err;
        }
    }

    async updateUsuario(usuario: Usuario):Promise<void>{
        const query = "UPDATE fotografia.Usuario set username =?, email = ?, name = ?, telefone = ?, senha = ? where id = ?;" ;

        executarComandoSQL(query, [usuario.username, usuario.email, usuario.name, usuario.telefone, usuario.senha, usuario.id])
            .then(function (resultado) {
                return resultado
            }).catch(function (erro) {
                return erro
            });
    }

    async deleteUsuario(usuario: Usuario) :Promise<any>{
        try {
        const query = "DELETE FROM fotografia.Usuario where id = ?;" ;
        const resposta = await executarComandoSQL(query, [usuario.id, usuario.username, usuario.email, usuario.name, usuario.telefone, usuario.senha]);
        console.log('Usuario deletado com sucesso:', resposta);
        
        return resposta;
        
        } catch (err:any) {
            console.error('Erro ao deletar usuario:', err);
            throw err;
        }
    }

    async getUsuarioPorIdOuUsernameOuEmailOuTelefone(id?: number, username?:string, email?: string, telefone?: number): Promise<Usuario[]> {
        let query = "SELECT * FROM fotografia.Usuario WHERE";
        const params: any[] = [];

        if (id) {
            query += " id = ?";
            params.push(id);
        }

        if (username){
            query += (params.length ? " AND" : "") + " username = ?";
            params.push(username);
        }

        if (email){
            query += (params.length ? " AND" : "") + " email = ?";
            params.push(email);
        }

        if (telefone){
            query += (params.length ? " AND" : "") + " telefone = ?";
            params.push(telefone);
        }

        if (params.length === 0) {
            throw new Error("Pelo menos um dos parâmetros deve ser fornecido");
        }

        try {
            const result: Usuario[] = await executarComandoSQL(query, params);
            console.log('Busca efetuada com sucesso:', result);

            return result;

        } catch (err) {
            console.error('Erro ao buscar usuario:', err);
            throw err;
        }
    }

    async listaUsuario(): Promise<Usuario[]> {
        try {
            const query = "SELECT * FROM fotografia.Usuario";
            const result: Usuario[] = await executarComandoSQL(query, []);

            return result;

        } catch (err) {
            console.error('Erro ao listar os usuarios:', err);
            throw err;
        }
    }
    
}