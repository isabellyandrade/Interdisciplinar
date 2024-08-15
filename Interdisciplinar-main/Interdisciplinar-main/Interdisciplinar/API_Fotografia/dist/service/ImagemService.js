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
exports.ImagemService = void 0;
const Imagem_1 = require("../model/Imagem");
const ImagemRepository_1 = require("../repository/ImagemRepository");
class ImagemService {
    constructor() {
        this.imagemRepository = ImagemRepository_1.ImagemRepository.getInstance();
    }
    cadastrarImagem(ImagemData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { caminhoArq, filtroImagem } = ImagemData;
            if (!caminhoArq || !filtroImagem) {
                throw new Error("Informações incompletas");
            }
            let imagem = new Imagem_1.Imagem(undefined, caminhoArq, filtroImagem);
            const imagemsEncontradas = yield this.imagemRepository.getImagemByIdOuFiltro(imagem.caminhoArq, undefined);
            if (imagemsEncontradas.length > 0) {
                throw new Error("Imagem já adicionada");
            }
            return this.imagemRepository.insertImagem(imagem);
        });
    }
    atualizarImagem(ImagemData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, caminhoArq, filtroImagem } = ImagemData;
            if (!id || !caminhoArq || !filtroImagem) {
                throw new Error("Informações incompletas");
            }
            const imagem = new Imagem_1.Imagem(id, caminhoArq, filtroImagem);
            const imagemsEncontradas = yield this.imagemRepository.getImagemByIdOuFiltro(undefined, id);
            if (imagemsEncontradas.length == 0) {
                throw new Error("Imagem informada inexistente.");
            }
            this.imagemRepository.updateImagem(imagem);
            return imagem;
        });
    }
    deletarImagem(ImagemData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, caminhoArq, filtroImagem } = ImagemData;
            if (!id || !caminhoArq || !filtroImagem) {
                throw new Error("Informações incompletas");
            }
            if (typeof id !== 'number') {
                throw new Error("Informe um ID correto.");
            }
            const imagem = new Imagem_1.Imagem(id, caminhoArq, filtroImagem);
            const result = yield this.imagemRepository.deleteImagem(imagem.id);
            return imagem;
        });
    }
    getImagem(id, filtroImagem) {
        return __awaiter(this, void 0, void 0, function* () {
            const idNumber = parseInt(id, 10);
            const result = yield this.imagemRepository.getImagemByIdOuFiltro(filtroImagem, idNumber);
            if (result.length > 0) {
                return result[0];
            }
            return null;
        });
    }
    getImagens() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.imagemRepository.filterAllImagem();
        });
    }
}
exports.ImagemService = ImagemService;
