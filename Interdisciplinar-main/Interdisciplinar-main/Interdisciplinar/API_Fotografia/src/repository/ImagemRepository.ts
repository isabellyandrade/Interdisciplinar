import { executarComandoSQL } from "../database/mysql";
import { Imagem } from "../model/Imagem";

export class ImagemRepository{

    private static instance: ImagemRepository;

    private constructor() {
        this.createTable();
    }

    public static getInstance(): ImagemRepository {
        if (!this.instance) {
            this.instance = new ImagemRepository();
        }
        return this.instance
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS fotografia.Imagem (
            id INT AUTO_INCREMENT PRIMARY KEY,
            usuarioId INT NOT NULL,
            caminhoArq VARCHAR(255) NOT NULL,
            filtroImagem VARCHAR(255) NOT NULL
        )`;
        try {
            const resultado =  await executarComandoSQL(query, []);
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertImagem(imagem: Imagem) :Promise<Imagem>{
        const query = "INSERT INTO fotografia.Imagem (usuarioId, caminhoArq, filtroImagem) VALUES (?, ?, ?)" ;

        try {
            const resultado = await executarComandoSQL(query, [imagem.usuarioId, imagem.caminhoArq, imagem.filtroImagem]);
            console.log('Imagem inserida com sucesso, ID: ', resultado.insertId);
            imagem.id = resultado.insertId;
            return imagem;

        } catch (err) {
            console.error('Erro ao inserir a imagem:', err);
            throw err;
        }
    }

    async updateImagem(imagem: Imagem) :Promise<void>{
        try {
            const query = "UPDATE fotografia.Imagem set usuarioId = ?, caminhoArq = ?, filtroImagem = ? where id = ?;" ;
            await executarComandoSQL(query, [imagem.usuarioId, imagem.caminhoArq, imagem.filtroImagem, imagem.id]);
            console.log('Imagem atualizada com sucesso:', imagem.id);
        } catch (err) {
            console.error('Erro ao atualizar imagem:', err);
            throw err;
        }
    }

    async deleteImagem(imagemId: number) :Promise<void>{
        try {
            const query = "DELETE FROM fotografia.Imagem where id = ?;" ;
            await executarComandoSQL(query, [imagemId]);
            console.log('Imagem deletada com sucesso, ID: ', imagemId);
        
        } catch (err) {
            console.error(`Falha ao deletar a imagem`, err);
            throw err;
        }
    }

    async getImagemByUsuarioIdOuIdOuFiltro(usuarioId?:number, filtroImagem?: string, id?: number): Promise<Imagem[]> {
        let query = "SELECT * FROM fotografia.Imagem WHERE";
        const params: any[] = [];

        if (usuarioId) {
            query += " usuarioId = ?";
            params.push(usuarioId);
        }

        if (filtroImagem) {
            query += " filtroImagem = ?";
            params.push(filtroImagem);
        }

        if (id) {
            query += (params.length ? " AND" : "") + " id = ?";
            params.push(id);
        }

        if (params.length === 0) {
            throw new Error("Pelo menos um dos parâmetros deve ser fornecido");
        }

        try {
            const result: Imagem[] = await executarComandoSQL(query, params);
            console.log('Busca efetuada com sucesso:', result);
            return result;
        } catch (err) {
            console.error('Erro ao buscar imagem:', err);
            throw err;
        }
    }

    async filterAllImagem() :Promise<Imagem[]>{
        try {
            const query = "SELECT * FROM fotografia.Imagem" ;
            const resultado: Imagem[] = await executarComandoSQL(query, []);
                
            return resultado;

        } catch (err:any) {
            console.error(`Falha ao listar as imagens`, err);
            throw err;
        }
    }
}