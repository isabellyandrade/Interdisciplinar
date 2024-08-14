"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(id, name, email, senha) {
        this.id = id || 0;
        this.name = name || '';
        this.email = email || '';
        this.senha = senha || '';
    }
}
exports.Usuario = Usuario;
