import { Request, Response } from "express";
import { GaleriaService } from "../service/GaleriaService";

const galeriaService = new GaleriaService();

export async function cadastrarGaleria (req: Request, res: Response){
    try {
        const novoGaleria = await galeriaService.cadastrarGaleria(req.body);
        res.status(201).json(
            {
                mensagem:"Galeria criada com sucesso!",
                galeria:novoGaleria
            }
        );
    } catch (error: any) {
        res.status(409).json({ message: error.message});
    }
};

export async function atualizarGaleria (req: Request, res: Response){
    try {
        const galeria = await galeriaService.atualizarGaleria(req.body);
        res.status(200).json(
            {
                mensagem:"Galeria atualizada com sucesso!",
                galeria:galeria
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function deletarGaleria (req: Request, res: Response){
    try {
        const galeria = await galeriaService.deletarGaleria(req.body);
        res.status(200).json(
            {
                mensagem:"Galeria deletada com sucesso!",
                galeria:galeria
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function getGaleria(req: Request, res: Response) {
    try {
        const galeria = await galeriaService.getGaleria(req.query.id, req.query.name, req.query.imagemId, req.query.usuarioId);
        res.status(200).json(
            {
                galeria: galeria
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

export async function getGalerias(res: Response) {
    try {
        const galeria = await galeriaService.getTodosGaleria();
        res.status(200).json(
            {
                galeria: galeria
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};