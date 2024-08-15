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
exports.cadastrarUsuario = cadastrarUsuario;
exports.atualizarUsuario = atualizarUsuario;
exports.deletarUsuario = deletarUsuario;
exports.getUsuario = getUsuario;
exports.getUsuarios = getUsuarios;
const UsuarioService_1 = require("../service/UsuarioService");
const usuarioService = new UsuarioService_1.UsuarioService();
function cadastrarUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const novoUsuario = yield usuarioService.cadastrarUsuario(req.body);
            res.status(201).json({
                mensagem: "Usuario adicionado com sucesso!",
                usuario: novoUsuario
            });
        }
        catch (error) {
            res.status(409).json({ message: error.message });
        }
    });
}
;
function atualizarUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const usuario = yield usuarioService.atualizarUsuario(req.body);
            res.status(200).json({
                mensagem: "Usuario atualizado com sucesso!",
                usuario: usuario
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
;
function deletarUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const usuario = yield usuarioService.deletarUsuario(req.body);
            res.status(200).json({
                mensagem: "Usuario deletado com sucesso!",
                usuario: usuario
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
;
function getUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const usuario = yield usuarioService.getUsuario(req.query.id, req.query.username, req.query.email, req.query.telefone);
            res.status(200).json({
                usuario: usuario
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
function getUsuarios(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const usuario = yield usuarioService.getTodosUsuario();
            res.status(200).json({
                usuarios: usuario
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
;
