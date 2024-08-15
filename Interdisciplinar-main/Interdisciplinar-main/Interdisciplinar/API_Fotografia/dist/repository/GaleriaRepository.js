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
exports.GaleriaRepository = void 0;
const mysql_1 = require("../database/mysql");
class GaleriaRepository {
    constructor() {
        this.createTable();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new GaleriaRepository();
        }
        return this.instance;
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        CREATE TABLE IF NOT EXISTS fotografia.Galeria (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            imagemId INT NOT NULL,
            usuarioId INT NOT NULL

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
    insertGaleria(galeria) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO fotografia.Galeria (name, imagemId, usuarioId) VALUES (?, ?, ?)";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [galeria.name, galeria.imagemId, galeria.usuarioId]);
                console.log('Galeria criada com sucesso, ID: ', resultado.insertId);
                galeria.id = resultado.insertId;
                return galeria;
            }
            catch (err) {
                console.error('Erro ao criar a galeria:', err);
                throw err;
            }
        });
    }
    updateGaleria(galeria) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE fotografia.Galeria set name = ?, imagemId = ?, usuarioId = ? where id = ?;";
            (0, mysql_1.executarComandoSQL)(query, [galeria.name, galeria.imagemId, galeria.usuarioId, galeria.id])
                .then(function (resultado) {
                return resultado;
            }).catch(function (erro) {
                return erro;
            });
        });
    }
    deleteGaleria(galeria) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "DELETE FROM fotografia.Galeria where id = ?;";
                const resposta = yield (0, mysql_1.executarComandoSQL)(query, [galeria.id, galeria.name, galeria.imagemId, galeria.usuarioId]);
                console.log('Galeria deletada com sucesso:', resposta);
                return resposta;
            }
            catch (err) {
                console.error('Erro ao deletar galeria:', err);
                throw err;
            }
        });
    }
    getGaleriaPorIdOuNameOuImagemOuUsuario(id, name, imagemId, usuarioId) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = "SELECT * FROM fotografia.Galeria WHERE";
            const params = [];
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
                const result = yield (0, mysql_1.executarComandoSQL)(query, params);
                console.log('Busca efetuada com sucesso:', result);
                return result;
            }
            catch (err) {
                console.error('Erro ao buscar galeria:', err);
                throw err;
            }
        });
    }
    filterAllGaleria() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "SELECT * FROM fotografia.Galeria";
                const result = yield (0, mysql_1.executarComandoSQL)(query, []);
                return result;
            }
            catch (err) {
                console.error('Erro ao listar as galerias:', err);
                throw err;
            }
        });
    }
}
exports.GaleriaRepository = GaleriaRepository;
