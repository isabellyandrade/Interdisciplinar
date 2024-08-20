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
exports.GaleriaController = void 0;
const GaleriaService_1 = require("../service/GaleriaService");
const tsoa_1 = require("tsoa");
const BasicResponseDto_1 = require("../model/dto/BasicResponseDto");
const GaleriaRequestDto_1 = require("../model/dto/GaleriaRequestDto");
const GaleriaDto_1 = require("../model/dto/GaleriaDto");
let GaleriaController = class GaleriaController extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.galeriaService = new GaleriaService_1.GaleriaService();
    }
    cadastrarGaleria(dto, fail, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const novoGaleria = yield this.galeriaService.cadastrarGaleria(dto);
                return success(201, new BasicResponseDto_1.BasicResponseDto("Galeria criada com sucesso!", novoGaleria));
            }
            catch (error) {
                return fail(409, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    ;
    atualizarGaleria(dto, notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const galeria = yield this.galeriaService.atualizarGaleria(dto);
                return success(200, new BasicResponseDto_1.BasicResponseDto("Galeria atualizada com sucesso!", galeria));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    ;
    deletarGaleria(dto, notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const galeria = yield this.galeriaService.deletarGaleria(dto);
                return success(200, new BasicResponseDto_1.BasicResponseDto("Galeria deletada com sucesso!", galeria));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    ;
    getGaleria(id, name, imagemId, usuarioId, notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const galeria = yield this.galeriaService.getGaleria(id, name, imagemId, usuarioId);
                return success(200, new BasicResponseDto_1.BasicResponseDto("Galeria encontrada!", galeria));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto("Galeria não encontrada...", undefined));
            }
        });
    }
    ;
    getGalerias(notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const galerias = yield this.galeriaService.getTodosGaleria();
                return success(200, new BasicResponseDto_1.BasicResponseDto("Galerias encontradas!", galerias));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto("Galerias não encontradas...", undefined));
            }
        });
    }
    ;
};
exports.GaleriaController = GaleriaController;
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [GaleriaRequestDto_1.GaleriaRequestDto, Function, Function]),
    __metadata("design:returntype", Promise)
], GaleriaController.prototype, "cadastrarGaleria", null);
__decorate([
    (0, tsoa_1.Put)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [GaleriaDto_1.GaleriaDto, Function, Function]),
    __metadata("design:returntype", Promise)
], GaleriaController.prototype, "atualizarGaleria", null);
__decorate([
    (0, tsoa_1.Delete)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [GaleriaDto_1.GaleriaDto, Function, Function]),
    __metadata("design:returntype", Promise)
], GaleriaController.prototype, "deletarGaleria", null);
__decorate([
    (0, tsoa_1.Get)(),
    __param(0, (0, tsoa_1.Query)()),
    __param(1, (0, tsoa_1.Query)()),
    __param(2, (0, tsoa_1.Query)()),
    __param(3, (0, tsoa_1.Query)()),
    __param(4, (0, tsoa_1.Res)()),
    __param(5, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number, Number, Function, Function]),
    __metadata("design:returntype", Promise)
], GaleriaController.prototype, "getGaleria", null);
__decorate([
    (0, tsoa_1.Get)("todos"),
    __param(0, (0, tsoa_1.Res)()),
    __param(1, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Function]),
    __metadata("design:returntype", Promise)
], GaleriaController.prototype, "getGalerias", null);
exports.GaleriaController = GaleriaController = __decorate([
    (0, tsoa_1.Route)("galeria"),
    (0, tsoa_1.Tags)("Galeria")
], GaleriaController);
;
