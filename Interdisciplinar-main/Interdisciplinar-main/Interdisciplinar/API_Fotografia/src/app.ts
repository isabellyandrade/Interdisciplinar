import express from 'express';
import { cadastrarGaleria, atualizarGaleria , deletarGaleria, getGaleria, getGalerias } from './controller/GaleriaController';
import { cadastrarImagem, atualizarImagem , deletarImagem, getImagem, getImagems } from './controller/ImagemController';
import { cadastrarUsuario, atualizarUsuario , deletarUsuario, getUsuario, getUsuarios } from './controller/UsuarioController';

const app = express();

const PORT = 3400;

app.use(express.json());

app.post("/api/galeria", cadastrarGaleria)
app.put("/api/galeria", atualizarGaleria)
app.delete("/api/galeria", deletarGaleria)
app.get("/api/galeria", getGaleria)
app.get("/api/galeria/todos", getGalerias)

app.post("/api/imagem", cadastrarImagem)
app.put("/api/imagem", atualizarImagem)
app.delete("/api/imagem", deletarImagem)
app.get("/api/imagem", getImagem)
app.get("/api/imagem/todos", getImagems)

app.post("/api/usuario", cadastrarUsuario)
app.put("/api/usuario", atualizarUsuario)
app.delete("/api/usuario", deletarUsuario)
app.get("/api/usuario", getUsuario)
app.get("/api/usuario/todos", getUsuarios)

app.listen(PORT, ()=> console.log("API online na porta: " + PORT));