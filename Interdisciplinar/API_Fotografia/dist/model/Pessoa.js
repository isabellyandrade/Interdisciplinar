"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(id, name, email) {
        this.id = id || 0;
        this.name = name || '';
        this.email = email || '';
    }
}
exports.Pessoa = Pessoa;
