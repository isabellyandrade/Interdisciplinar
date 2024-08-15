import { Request, Response } from "express";
import { ImagemService } from "../service/ImagemService";

const imagemService = new ImagemService();

export async function cadastrarImagem (req: Request, res: Response){
    try {
        const novaImagem = await imagemService.cadastrarImagem(req.body);
        res.status(201).json(
            {
                mensagem:"Imagem adicionada com sucesso!",
                imagem:novaImagem
            }
        );
    } catch (error: any) {
        res.status(409).json({ message: error.message});
    }
};

export async function atualizarImagem (req: Request, res: Response){
    try {
        const imagem = await imagemService.atualizarImagem(req.body);
        res.status(200).json(
            {
                mensagem:"Imagem atualizada com sucesso!",
                imagem:imagem
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function deletarImagem (req: Request, res: Response){
    try {
        const imagem = await imagemService.deletarImagem(req.body);
        res.status(200).json(
            {
                mensagem:"Imagem deletada com sucesso!",
                imagem:imagem
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function getImagem(req: Request, res: Response) {
    try {
        const imagem = await imagemService.getImagem(req.query.id, req.query.filtroImagem);
        res.status(200).json(
            {
                imagem: imagem
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

export async function getImagems(req: Request, res: Response) {
    try {
        const imagem = await imagemService.getImagens();
        res.status(200).json(
            {
                imagens: imagem
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};