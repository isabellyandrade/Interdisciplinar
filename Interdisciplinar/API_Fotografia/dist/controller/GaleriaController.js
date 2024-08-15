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
exports.cadastrarGaleria = cadastrarGaleria;
exports.atualizarGaleria = atualizarGaleria;
exports.deletarGaleria = deletarGaleria;
exports.getGaleria = getGaleria;
exports.getGalerias = getGalerias;
const GaleriaService_1 = require("../service/GaleriaService");
const galeriaService = new GaleriaService_1.GaleriaService();
function cadastrarGaleria(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const novoGaleria = yield galeriaService.cadastrarGaleria(req.body);
            res.status(201).json({
                mensagem: "Galeria criada com sucesso!",
                galeria: novoGaleria
            });
        }
        catch (error) {
            res.status(409).json({ message: error.message });
        }
    });
}
;
function atualizarGaleria(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const galeria = yield galeriaService.atualizarGaleria(req.body);
            res.status(200).json({
                mensagem: "Galeria atualizada com sucesso!",
                galeria: galeria
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
;
function deletarGaleria(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const galeria = yield galeriaService.deletarGaleria(req.body);
            res.status(200).json({
                mensagem: "Galeria deletada com sucesso!",
                galeria: galeria
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
;
function getGaleria(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const galeria = yield galeriaService.getGaleria(req.query.id, req.query.name, req.query.imagemId, req.query.usuarioId);
            res.status(200).json({
                galeria: galeria
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
function getGalerias(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const galeria = yield galeriaService.getTodosGaleria();
            res.status(200).json({
                galeria: galeria
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
;
