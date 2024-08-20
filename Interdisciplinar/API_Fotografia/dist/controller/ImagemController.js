"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.ImagemController = void 0;
const ImagemService_1 = require("../service/ImagemService");
const tsoa_1 = require("tsoa");
const BasicResponseDto_1 = require("../model/dto/BasicResponseDto");
const ImagemRequestDto_1 = require("../model/dto/ImagemRequestDto");
const ImagemDto_1 = require("../model/dto/ImagemDto");
let ImagemController = class ImagemController extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.imagemService = new ImagemService_1.ImagemService();
    }
    cadastrarImagem(dto, fail, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const novaImagem = yield this.imagemService.cadastrarImagem(dto);
                return success(201, new BasicResponseDto_1.BasicResponseDto("Imagem adicionada com sucesso!", novaImagem));
            }
            catch (error) {
                return fail(409, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    ;
    atualizarImagem(dto, notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const imagem = yield this.imagemService.atualizarImagem(dto);
                return success(200, new BasicResponseDto_1.BasicResponseDto("Imagem atualizada com sucesso!", imagem));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    ;
    deletarImagem(dto, notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const imagem = yield this.imagemService.deletarImagem(dto);
                return success(200, new BasicResponseDto_1.BasicResponseDto("Imagem deletada com sucesso!", imagem));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    ;
    getImagem(id, usuarioId, filtroImagem, notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const imagem = yield this.imagemService.getImagem(id, usuarioId, filtroImagem);
                return success(200, new BasicResponseDto_1.BasicResponseDto("Imagem encontrada!", imagem));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto("Imagem não encontrada...", undefined));
            }
        });
    }
    ;
    getImagems(notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const imagens = yield this.imagemService.getImagens();
                return success(200, new BasicResponseDto_1.BasicResponseDto("Imagens encontradas!", imagens));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto("Imagens não encontradas...", undefined));
            }
        });
    }
    ;
};
exports.ImagemController = ImagemController;
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ImagemRequestDto_1.ImagemRequestDto, Function, Function]),
    __metadata("design:returntype", Promise)
], ImagemController.prototype, "cadastrarImagem", null);
__decorate([
    (0, tsoa_1.Put)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ImagemDto_1.ImagemDto, Function, Function]),
    __metadata("design:returntype", Promise)
], ImagemController.prototype, "atualizarImagem", null);
__decorate([
    (0, tsoa_1.Delete)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ImagemDto_1.ImagemDto, Function, Function]),
    __metadata("design:returntype", Promise)
], ImagemController.prototype, "deletarImagem", null);
__decorate([
    (0, tsoa_1.Get)(),
    __param(0, (0, tsoa_1.Query)()),
    __param(1, (0, tsoa_1.Query)()),
    __param(2, (0, tsoa_1.Query)()),
    __param(3, (0, tsoa_1.Res)()),
    __param(4, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, Function, Function]),
    __metadata("design:returntype", Promise)
], ImagemController.prototype, "getImagem", null);
__decorate([
    (0, tsoa_1.Get)("todos"),
    __param(0, (0, tsoa_1.Res)()),
    __param(1, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Function]),
    __metadata("design:returntype", Promise)
], ImagemController.prototype, "getImagems", null);
exports.ImagemController = ImagemController = __decorate([
    (0, tsoa_1.Route)("imagem"),
    (0, tsoa_1.Tags)("Imagem")
], ImagemController);
;
