"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const Usuario_1 = require("../model/Usuario");
const UsuarioRepository_1 = require("../repository/UsuarioRepository");
class UsuarioService {
    constructor() {
        this.usuarioRepository = UsuarioRepository_1.UsuarioRepository.getInstance();
    }
    cadastrarUsuario(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, email, name, telefone, senha } = userData;
            if (!username || !email || !name || !telefone || !senha) {
                throw new Error("Informações incompletas");
            }
            const usuarios = yield this.usuarioRepository.getUsuarioPorIdOuUsernameOuEmailOuTelefone(undefined, username, undefined, undefined);
            if (usuarios.length > 0) {
                throw new Error("Username já existe");
            }
            return this.usuarioRepository.insertUsuario(new Usuario_1.Usuario(undefined, username, email, name, telefone, senha));
        });
    }
    atualizarUsuario(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = new Usuario_1.Usuario(userData.id, userData.email, userData.name, userData.telefone, userData.senha);
            if (!(usuario instanceof Usuario_1.Usuario)) {
                throw new Error("O parâmetro passado não é um objeto do tipo Usuario");
            }
            this.usuarioRepository.updateUsuario(usuario);
            return usuario;
        });
    }
    deletarUsuario(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = new Usuario_1.Usuario(userData.id, userData.email, userData.name, userData.telefone, userData.senha, userData.dataCriacao);
            if (!(usuario instanceof Usuario_1.Usuario)) {
                throw new Error("O parâmetro passado não é um objeto do tipo Usuario");
            }
            const result = yield this.usuarioRepository.deleteUsuario(usuario);
            if (result.affectedRows == 0) {
                throw new Error("Usuario não encontrado.");
            }
            return usuario;
        });
    }
    getUsuario(id, username, email, telefone) {
        return __awaiter(this, void 0, void 0, function* () {
            const idNumber = parseInt(id, 10);
            const result = yield this.usuarioRepository.getUsuarioPorIdOuUsernameOuEmailOuTelefone(idNumber, username, email, telefone);
            if (result.length > 0) {
                return result[0];
            }
            return null;
        });
    }
    getTodosUsuario() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.usuarioRepository.listaUsuario();
        });
    }
}
exports.UsuarioService = UsuarioService;
