"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Galeria = void 0;
class Galeria {
    constructor(id, name, imagemId, usuarioId) {
        this.id = id || 0;
        this.name = name || '';
        this.imagemId = imagemId || 0;
        this.usuarioId = usuarioId || 0;
    }
}
exports.Galeria = Galeria;
