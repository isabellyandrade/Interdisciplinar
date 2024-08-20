"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GaleriaRequestDto = void 0;
class GaleriaRequestDto {
    constructor(name, imagemId, usuarioId) {
        this.name = name || '';
        this.imagemId = imagemId || 0;
        this.usuarioId = usuarioId || 0;
    }
}
exports.GaleriaRequestDto = GaleriaRequestDto;
