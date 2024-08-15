"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    constructor(id, title, author, categoryId) {
        this.id = id || 0;
        this.title = title || '';
        this.author = author || '';
        this.categoryId = categoryId || 0;
    }
}
exports.Livro = Livro;
