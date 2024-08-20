"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRequestDto = void 0;
class UsuarioRequestDto {
    constructor(username, email, name, telefone, senha, dataCriacao) {
        this.username = username || '';
        this.email = email || '';
        this.name = name || '';
        this.telefone = telefone || '';
        this.senha = senha || '';
    }
}
exports.UsuarioRequestDto = UsuarioRequestDto;
