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
exports.UsuarioController = void 0;
const UsuarioService_1 = require("../service/UsuarioService");
const tsoa_1 = require("tsoa");
const BasicResponseDto_1 = require("../model/dto/BasicResponseDto");
const UsuarioRequestDto_1 = require("../model/dto/UsuarioRequestDto");
const UsuarioDto_1 = require("../model/dto/UsuarioDto");
let UsuarioController = class UsuarioController extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.usuarioService = new UsuarioService_1.UsuarioService();
    }
    cadastrarUsuario(dto, fail, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const novoUsuario = yield this.usuarioService.cadastrarUsuario(dto);
                return success(201, new BasicResponseDto_1.BasicResponseDto("Usuário adicionado com sucesso!", novoUsuario));
            }
            catch (error) {
                return fail(409, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    ;
    atualizarUsuario(dto, notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = yield this.usuarioService.atualizarUsuario(dto);
                return success(200, new BasicResponseDto_1.BasicResponseDto("Usuário atualizado com sucesso!", usuario));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    ;
    deletarUsuario(dto, notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = yield this.usuarioService.deletarUsuario(dto);
                return success(200, new BasicResponseDto_1.BasicResponseDto("Usuário deletado com sucesso!", usuario));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    ;
    getUsuario(id, username, email, telefone, notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = yield this.usuarioService.getUsuario(id, username, email, telefone);
                return success(200, new BasicResponseDto_1.BasicResponseDto("Usuário encontrado!", usuario));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto("Usuário não encontrado...", undefined));
            }
        });
    }
    ;
    getUsuarios(notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarios = yield this.usuarioService.getTodosUsuario();
                return success(200, new BasicResponseDto_1.BasicResponseDto("Usuários encontrado!", usuarios));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto("Usuários não encontrados...", undefined));
            }
        });
    }
    ;
};
exports.UsuarioController = UsuarioController;
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UsuarioRequestDto_1.UsuarioRequestDto, Function, Function]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "cadastrarUsuario", null);
__decorate([
    (0, tsoa_1.Put)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UsuarioDto_1.UsuarioDto, Function, Function]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "atualizarUsuario", null);
__decorate([
    (0, tsoa_1.Delete)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UsuarioDto_1.UsuarioDto, Function, Function]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "deletarUsuario", null);
__decorate([
    (0, tsoa_1.Get)(),
    __param(0, (0, tsoa_1.Query)()),
    __param(1, (0, tsoa_1.Query)()),
    __param(2, (0, tsoa_1.Query)()),
    __param(3, (0, tsoa_1.Query)()),
    __param(4, (0, tsoa_1.Res)()),
    __param(5, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, Function, Function]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "getUsuario", null);
__decorate([
    (0, tsoa_1.Get)("todos"),
    __param(0, (0, tsoa_1.Res)()),
    __param(1, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Function]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "getUsuarios", null);
exports.UsuarioController = UsuarioController = __decorate([
    (0, tsoa_1.Route)("usuario"),
    (0, tsoa_1.Tags)("Usuario")
], UsuarioController);
