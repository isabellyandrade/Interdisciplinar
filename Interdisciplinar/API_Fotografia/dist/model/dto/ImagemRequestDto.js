"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagemRequestDto = void 0;
class ImagemRequestDto {
    constructor(usuarioId, caminhoArq, filtroImagem) {
        this.usuarioId = usuarioId || 0;
        this.caminhoArq = caminhoArq || '';
        this.filtroImagem = filtroImagem || '';
    }
}
exports.ImagemRequestDto = ImagemRequestDto;
