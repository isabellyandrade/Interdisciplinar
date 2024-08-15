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
exports.LivroRepository = void 0;
const mysql_1 = require("../database/mysql");
const Livro_1 = require("../model/Livro");
class LivroRepository {
    constructor() {
        this.createTable();
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        CREATE TABLE IF NOT EXISTS biblioteca.Livro (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(255) NOT NULL,
            categoryId INT NOT NULL
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
    insertLivro(title, author, categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO biblioteca.Livro (title, author, categoryId) VALUES (?, ?, ?)";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [title, author, categoryId]);
                console.log('Livro inserido com sucesso, ID: ', resultado.insertId);
                const livro = new Livro_1.Livro(resultado.insertId, title, author, categoryId);
                return new Promise((resolve) => {
                    resolve(livro);
                });
            }
            catch (err) {
                console.error('Erro ao inserir o livro:', err);
                throw err;
            }
        });
    }
    updateLivro(id, title, author, categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE biblioteca.Livro set title = ?, author = ?, categoryId = ? where id = ?;";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [title, author, categoryId, id]);
                console.log('Livro atualizado com sucesso, ID: ', resultado);
                const livro = new Livro_1.Livro(id, title, author, categoryId);
                return new Promise((resolve) => {
                    resolve(livro);
                });
            }
            catch (err) {
                console.error(`Erro ao atualizar o livro de ID ${id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    deleteLivro(id, title, author, categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "DELETE FROM biblioteca.Livro where id = ?;";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [id]);
                console.log('Livro deletado com sucesso, ID: ', resultado);
                const livro = new Livro_1.Livro(id, title, author, categoryId);
                return new Promise((resolve) => {
                    resolve(livro);
                });
            }
            catch (err) {
                console.error(`Falha ao deletar o livro de ID ${id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    filterLivroById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM biblioteca.Livro where id = ?";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [id]);
                console.log('Livro localizado com sucesso, ID: ', resultado);
                return new Promise((resolve) => {
                    resolve(resultado);
                });
            }
            catch (err) {
                console.error(`Falha ao procurar o livro de ID ${id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    filterAllLivro() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM biblioteca.Livro";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                return new Promise((resolve) => {
                    resolve(resultado);
                });
            }
            catch (err) {
                console.error(`Falha ao listar os livros gerando o erro: ${err}`);
                throw err;
            }
        });
    }
}
exports.LivroRepository = LivroRepository;
