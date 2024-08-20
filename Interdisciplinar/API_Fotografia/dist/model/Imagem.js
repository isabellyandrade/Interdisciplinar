"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imagem = void 0;
class Imagem {
    constructor(id, usuarioId, caminhoArq, filtroImagem) {
        this.id = id || 0;
        this.usuarioId = usuarioId || 0;
        this.caminhoArq = caminhoArq || '';
        this.filtroImagem = filtroImagem || '';
    }
}
exports.Imagem = Imagem;
