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
exports.LivroService = void 0;
const LivroRepository_1 = require("../repository/LivroRepository");
class LivroService {
    constructor() {
        this.livroRepository = new LivroRepository_1.LivroRepository();
    }
    cadastrarLivro(livroData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, author, categoryId } = livroData;
            if (!title || !author || !categoryId) {
                throw new Error("Informações incompletas");
            }
            const novoLivro = yield this.livroRepository.insertLivro(title, author, categoryId);
            console.log("Service - Insert ", novoLivro);
            return novoLivro;
        });
    }
    atualizarLivro(livroData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, title, author, categoryId } = livroData;
            if (!id || !title || !author || !categoryId) {
                throw new Error("Informações incompletas");
            }
            const livro = yield this.livroRepository.updateLivro(id, title, author, categoryId);
            console.log("Service - Update ", livro);
            return livro;
        });
    }
    deletarLivro(livroData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, title, author, categoryId } = livroData;
            if (!id || !title || !author || !categoryId) {
                throw new Error("Informações incompletas");
            }
            const livro = yield this.livroRepository.deleteLivro(id, title, author, categoryId);
            console.log("Service - Delete ", livro);
            return livro;
        });
    }
    filtrarLivroPorId(livroData) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!livroData) {
                throw new Error("Informações incompletas");
            }
            const id = parseInt(livroData, 10);
            const livros = yield this.livroRepository.filterLivroById(id);
            if (livros.length == 0) {
                throw new Error("Livro não encontrado!");
            }
            console.log("Service - Filtrar", livros);
            return livros;
        });
    }
    listarTodosLivros() {
        return __awaiter(this, void 0, void 0, function* () {
            const livro = yield this.livroRepository.filterAllLivro();
            console.log("Service - Filtrar Todos", livro);
            return livro;
        });
    }
}
exports.LivroService = LivroService;
