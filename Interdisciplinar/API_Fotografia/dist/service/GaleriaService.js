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
exports.GaleriaService = void 0;
const Galeria_1 = require("../model/Galeria");
const ImagemRepository_1 = require("../repository/ImagemRepository");
const GaleriaRepository_1 = require("../repository/GaleriaRepository");
const UsuarioRepository_1 = require("../repository/UsuarioRepository");
class GaleriaService {
    constructor() {
        this.imagemRepository = ImagemRepository_1.ImagemRepository.getInstance();
        this.galeriaRepository = GaleriaRepository_1.GaleriaRepository.getInstance();
        this.usuarioRepository = UsuarioRepository_1.UsuarioRepository.getInstance();
    }
    cadastrarGaleria(GaleriaData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, imagemId, usuarioId } = GaleriaData;
            if (!name || !imagemId || !usuarioId) {
                throw new Error("Informações incompletas");
            }
            const users = yield this.usuarioRepository.getUsuarioPorIdOuUsernameOuEmailOuTelefone(usuarioId, undefined, undefined, undefined);
            const imagens = yield this.imagemRepository.getImagemByIdOuFiltro(undefined, imagemId);
            if (users.length == 0) {
                throw new Error("Usuario não encontrado");
            }
            if (imagens.length == 0) {
                throw new Error("Imagem não encontrada");
            }
            return this.galeriaRepository.insertGaleria(new Galeria_1.Galeria(undefined, name, imagemId, usuarioId));
        });
    }
    atualizarGaleria(GaleriaData) {
        return __awaiter(this, void 0, void 0, function* () {
            const galeria = new Galeria_1.Galeria(GaleriaData.id, GaleriaData.name, GaleriaData.imagemId, GaleriaData.usuarioId);
            if (!(galeria instanceof Galeria_1.Galeria)) {
                throw new Error("O parâmetro passado não é um objeto do tipo Galeria");
            }
            this.galeriaRepository.updateGaleria(galeria);
            return galeria;
        });
    }
    deletarGaleria(GaleriaData) {
        return __awaiter(this, void 0, void 0, function* () {
            const galeria = new Galeria_1.Galeria(GaleriaData.id, GaleriaData.name, GaleriaData.imagemId, GaleriaData.usuarioId);
            if (!(galeria instanceof Galeria_1.Galeria)) {
                throw new Error("O parâmetro passado não é um objeto do tipo Galeria");
            }
            const result = yield this.galeriaRepository.deleteGaleria(galeria);
            if (result.affectedRows == 0) {
                throw new Error("Galeria não encontrada.");
            }
            return galeria;
        });
    }
    getGaleria(id, name, imagemId, usuarioId) {
        return __awaiter(this, void 0, void 0, function* () {
            const idNumber = parseInt(id, 10);
            const imagemNumber = parseInt(imagemId, 10);
            const userNumber = parseInt(usuarioId, 10);
            const result = yield this.galeriaRepository.getGaleriaPorIdOuNameOuImagemOuUsuario(idNumber, name, imagemNumber, userNumber);
            if (result.length > 0) {
                return result[0];
            }
            return null;
        });
    }
    getTodosGaleria() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.galeriaRepository.filterAllGaleria();
        });
    }
}
exports.GaleriaService = GaleriaService;
