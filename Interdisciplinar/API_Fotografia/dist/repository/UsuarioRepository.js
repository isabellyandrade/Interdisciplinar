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
exports.UsuarioRepository = void 0;
const mysql_1 = require("../database/mysql");
class UsuarioRepository {
    constructor() {
        this.createTable();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new UsuarioRepository();
        }
        return this.instance;
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
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
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                console.log('Query executada com sucesso:', resultado);
            }
            catch (err) {
                console.error('Error');
            }
        });
    }
    insertUsuario(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO fotografia.Usuario (username, email, name, telefone, senha) VALUES (?, ?, ?, ?, ?)";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [usuario.username, usuario.email, usuario.name, usuario.telefone, usuario.senha]);
                console.log('Usuario criado com sucesso:', resultado.insertId);
                usuario.id = resultado.insertId;
                return usuario;
            }
            catch (err) {
                console.error('Erro ao criar novo usuario:', err);
                throw err;
            }
        });
    }
    updateUsuario(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE fotografia.Usuario set username =?, email = ?, name = ?, telefone = ?, senha = ? where id = ?;";
            (0, mysql_1.executarComandoSQL)(query, [usuario.username, usuario.email, usuario.name, usuario.telefone, usuario.senha, usuario.id])
                .then(function (resultado) {
                return resultado;
            }).catch(function (erro) {
                return erro;
            });
        });
    }
    deleteUsuario(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "DELETE FROM fotografia.Usuario where id = ?;";
                const resposta = yield (0, mysql_1.executarComandoSQL)(query, [usuario.id, usuario.username, usuario.email, usuario.name, usuario.telefone, usuario.senha, usuario.dataCriacao]);
                console.log('Usuario deletado com sucesso:', resposta);
                return resposta;
            }
            catch (err) {
                console.error('Erro ao deletar usuario:', err);
                throw err;
            }
        });
    }
    getUsuarioPorIdOuUsernameOuEmailOuTelefone(id, username, email, telefone) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = "SELECT * FROM fotografia.Usuario WHERE";
            const params = [];
            if (id) {
                query += " id = ?";
                params.push(id);
            }
            if (username) {
                query += (params.length ? " AND" : "") + " username = ?";
                params.push(username);
            }
            if (email) {
                query += (params.length ? " AND" : "") + " email = ?";
                params.push(email);
            }
            if (telefone) {
                query += (params.length ? " AND" : "") + " telefone = ?";
                params.push(telefone);
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
                console.error('Erro ao buscar usuario:', err);
                throw err;
            }
        });
    }
    listaUsuario() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "SELECT * FROM fotografia.Usuario";
                const result = yield (0, mysql_1.executarComandoSQL)(query, []);
                return result;
            }
            catch (err) {
                console.error('Erro ao listar os usuarios:', err);
                throw err;
            }
        });
    }
}
exports.UsuarioRepository = UsuarioRepository;
