"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const LivroController_1 = require("./controller/LivroController");
const app = (0, express_1.default)();
const PORT = 3400;
app.use(express_1.default.json());
app.post("/api/livro", LivroController_1.cadastrarLivro);
app.put("/api/livro", LivroController_1.atualizarLivro);
app.delete("/api/livro", LivroController_1.deletarLivro);
app.get("/api/livro", LivroController_1.filtrarLivroPorId);
app.get("/api/livro/todos", LivroController_1.listarTodosLivros);
app.listen(PORT, () => console.log("API online na porta: " + PORT));
