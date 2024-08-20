"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagemRepository = void 0;
const mysql_1 = require("../database/mysql");
class ImagemRepository {
    constructor() {
        this.createTable();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new ImagemRepository();
        }
        return this.instance;
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        CREATE TABLE IF NOT EXISTS fotografia.Imagem (
            id INT AUTO_INCREMENT PRIMARY KEY,
            usuarioId INT NOT NULL,
            caminhoArq VARCHAR(255) NOT NULL,
            filtroImagem VARCHAR(255) NOT NULL
        )`;
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                console.log('Query executada com sucesso:', resultado);
            }
            catch (err) {
                console.error('Error');
            }
        });
    }
    insertImagem(imagem) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO fotografia.Imagem (usuarioId, caminhoArq, filtroImagem) VALUES (?, ?, ?)";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [imagem.usuarioId, imagem.caminhoArq, imagem.filtroImagem]);
                console.log('Imagem inserida com sucesso, ID: ', resultado.insertId);
                imagem.id = resultado.insertId;
                return imagem;
            }
            catch (err) {
                console.error('Erro ao inserir a imagem:', err);
                throw err;
            }
        });
    }
    updateImagem(imagem) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "UPDATE fotografia.Imagem set usuarioId = ?, caminhoArq = ?, filtroImagem = ? where id = ?;";
                yield (0, mysql_1.executarComandoSQL)(query, [imagem.usuarioId, imagem.caminhoArq, imagem.filtroImagem, imagem.id]);
                console.log('Imagem atualizada com sucesso:', imagem.id);
            }
            catch (err) {
                console.error('Erro ao atualizar imagem:', err);
                throw err;
            }
        });
    }
    deleteImagem(imagemId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "DELETE FROM fotografia.Imagem where id = ?;";
                yield (0, mysql_1.executarComandoSQL)(query, [imagemId]);
                console.log('Imagem deletada com sucesso, ID: ', imagemId);
            }
            catch (err) {
                console.error(`Falha ao deletar a imagem`, err);
                throw err;
            }
        });
    }
    getImagemByUsuarioIdOuIdOuFiltro(usuarioId, filtroImagem, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = "SELECT * FROM fotografia.Imagem WHERE";
            const params = [];
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
                const result = yield (0, mysql_1.executarComandoSQL)(query, params);
                console.log('Busca efetuada com sucesso:', result);
                return result;
            }
            catch (err) {
                console.error('Erro ao buscar imagem:', err);
                throw err;
            }
        });
    }
    filterAllImagem() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "SELECT * FROM fotografia.Imagem";
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                return resultado;
            }
            catch (err) {
                console.error(`Falha ao listar as imagens`, err);
                throw err;
            }
        });
    }
}
exports.ImagemRepository = ImagemRepository;
