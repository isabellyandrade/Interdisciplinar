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
exports.cadastrarImagem = cadastrarImagem;
exports.atualizarImagem = atualizarImagem;
exports.deletarImagem = deletarImagem;
exports.getImagem = getImagem;
exports.getImagems = getImagems;
const ImagemService_1 = require("../service/ImagemService");
const imagemService = new ImagemService_1.ImagemService();
function cadastrarImagem(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const novaImagem = yield imagemService.cadastrarImagem(req.body);
            res.status(201).json({
                mensagem: "Imagem adicionada com sucesso!",
                imagem: novaImagem
            });
        }
        catch (error) {
            res.status(409).json({ message: error.message });
        }
    });
}
;
function atualizarImagem(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const imagem = yield imagemService.atualizarImagem(req.body);
            res.status(200).json({
                mensagem: "Imagem atualizada com sucesso!",
                imagem: imagem
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
;
function deletarImagem(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const imagem = yield imagemService.deletarImagem(req.body);
            res.status(200).json({
                mensagem: "Imagem deletada com sucesso!",
                imagem: imagem
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
;
function getImagem(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const imagem = yield imagemService.getImagem(req.query.id, req.query.filtroImagem);
            res.status(200).json({
                imagem: imagem
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
function getImagems(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const imagem = yield imagemService.getImagens();
            res.status(200).json({
                imagens: imagem
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
;
