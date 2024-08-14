import { executarComandoSQL } from "../database/mysql";
import { Galeria } from "../model/Galeria";

export class GaleriaRepository{

    private static instance: GaleriaRepository;

    private constructor() {
        this.createTable();
    }

    public static getInstance(): GaleriaRepository {
        if (!this.instance) {
            this.instance = new GaleriaRepository();
        }
        return this.instance
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS fotografia.Galeria (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            imagemId INT NOT NULL,
            usuarioId INT NOT NULL

        )`;

        try {
            const resultado =  await executarComandoSQL(query, []);
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertGaleria(galeria: Galeria) :Promise<Galeria>{
        const query = "INSERT INTO fotografia.Galeria (name, imagemId, usuarioId) VALUES (?, ?, ?)" ;

        try {
            const resultado = await executarComandoSQL(query, [galeria.name, galeria.imagemId, galeria.usuarioId]);
            console.log('Galeria criada com sucesso, ID: ', resultado.insertId);
            galeria.id = resultado.insertId;
            return galeria;

        } catch (err) {
            console.error('Erro ao criar a galeria:', err);
            throw err;
        }
    }

    async updateGaleria(galeria: Galeria) :Promise<void>{
        const query = "UPDATE fotografia.Galeria set name = ?, imagemId = ?, usuarioId = ? where id = ?;" ;

        executarComandoSQL(query, [galeria.name, galeria.imagemId, galeria.usuarioId, galeria.id])
            .then(function (resultado) {
                return resultado
            }).catch(function (erro) {
                return erro
            });
    }

    async deleteGaleria(galeria: Galeria) :Promise<any>{
        try {
            const query = "DELETE FROM fotografia.Galeria where id = ?;" ;
            const resposta = await executarComandoSQL(query, [galeria.id, galeria.name, galeria.imagemId, galeria.usuarioId]);
            console.log('Galeria deletada com sucesso:', resposta);

            return resposta;
        
        } catch (err:any) {
            console.error('Erro ao deletar galeria:', err);
            throw err;
        }
    }

    async getGaleriaPorIdOuNameOuImagemOuUsuario(id?: number, name?: string, imagemId?: number, usuarioId?: number): Promise<Galeria[]> {
        let query = "SELECT * FROM fotografia.Galeria WHERE";
        const params: any[] = [];

        if (id) {
            query += " id = ?";
            params.push(id);
        }

        if (name) {
            query += (params.length ? " AND" : "") + " name = ?";
            params.push(name);
        }

        if (imagemId) {
            query += (params.length ? " AND" : "") + " imagemId = ?";
            params.push(imagemId);
        }

        if (usuarioId) {
            query += (params.length ? " AND" : "") + " usuarioId = ?";
            params.push(usuarioId);
        }

        if (params.length === 0) {
            throw new Error("Pelo menos um dos parâmetros deve ser fornecido");
        }

        try {
            const result: Galeria[] = await executarComandoSQL(query, params);
            console.log('Busca efetuada com sucesso:', result);

            return result;

        } catch (err) {
            console.error('Erro ao buscar galeria:', err);
            throw err;
        }
    }

    async filterAllGaleria() :Promise<Galeria[]>{
        try {
            const query = "SELECT * FROM fotografia.Galeria";
            const result: Galeria[] = await executarComandoSQL(query, []);

            return result;

        } catch (err) {
            console.error('Erro ao listar as galerias:', err);
            throw err;
        }
    }
    
}