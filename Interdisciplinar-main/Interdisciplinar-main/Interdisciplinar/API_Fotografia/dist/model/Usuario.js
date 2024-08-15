"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(id, username, email, name, telefone, senha, dataCriacao) {
        this.id = id || 0;
        this.username = username || '';
        this.email = email || '';
        this.name = name || '';
        this.telefone = telefone || '';
        this.senha = senha || '';
        this.dataCriacao = dataCriacao || '';
    }
}
exports.Usuario = Usuario;
