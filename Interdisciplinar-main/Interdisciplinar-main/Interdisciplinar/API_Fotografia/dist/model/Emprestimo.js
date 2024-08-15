"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emprestimo = void 0;
class Emprestimo {
    constructor(id, livroId, usuarioId, dataEmprestimo, dataDevolucao) {
        this.id = id || 0;
        this.livroId = livroId || 0;
        ;
        this.usuarioId = usuarioId || 0;
        this.dataEmprestimo = dataEmprestimo || '';
        this.dataDevolucao = dataDevolucao || '';
    }
}
exports.Emprestimo = Emprestimo;
