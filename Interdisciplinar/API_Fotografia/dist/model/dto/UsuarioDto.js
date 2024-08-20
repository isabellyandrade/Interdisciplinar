"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioDto = void 0;
class UsuarioDto {
    constructor(id, username, email, name, telefone, senha, dataCriacao) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.name = name;
        this.telefone = telefone;
        this.senha = senha;
        this.dataCriacao = dataCriacao;
    }
}
exports.UsuarioDto = UsuarioDto;
