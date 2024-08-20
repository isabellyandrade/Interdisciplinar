import { GaleriaService } from "../service/GaleriaService";
import{Route, Tags, Post, Body, Res, Put, Get, Query, Delete, Controller, TsoaResponse } from "tsoa";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { GaleriaRequestDto } from "../model/dto/GaleriaRequestDto";
import { GaleriaDto } from "../model/dto/GaleriaDto";

@Route("galeria")
@Tags("Galeria")
export class GaleriaController extends Controller{
    galeriaService = new GaleriaService();

    @Post()
    async cadastrarGaleria(
        @Body() dto: GaleriaRequestDto,
        @Res() fail: TsoaResponse<409, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise<void>{
        try {
            const novoGaleria = await this.galeriaService.cadastrarGaleria(dto);
            return success(201, new BasicResponseDto("Galeria criada com sucesso!", novoGaleria));
    }catch (error: any) {
        return fail(409, new BasicResponseDto(error.message, undefined));
    }
};
@Put()
async atualizarGaleria(
    @Body() dto: GaleriaDto,
    @Res() notFound: TsoaResponse<400, BasicResponseDto>,
    @Res() success: TsoaResponse<200, BasicResponseDto>
): Promise<void>{
    try {
        const galeria = await this.galeriaService.atualizarGaleria(dto);
        return success(200, new BasicResponseDto("Galeria atualizada com sucesso!", galeria));
}catch (error: any) {
    return notFound(400, new BasicResponseDto(error.message, undefined));
}

};

@Delete()
async deletarGaleria(
    @Body() dto: GaleriaDto,
    @Res() notFound: TsoaResponse<400, BasicResponseDto>,
    @Res() success: TsoaResponse<200, BasicResponseDto>
): Promise<void>{
    try {
        const galeria = await this.galeriaService.deletarGaleria(dto);
        return success(200, new BasicResponseDto("Galeria deletada com sucesso!", galeria));
}catch (error: any) {
    return notFound(400, new BasicResponseDto(error.message, undefined));
}

};

@Get()
async getGaleria(
    @Query() id: number,
    @Query() name: string,
    @Query() imagemId: number,
    @Query() usuarioId: number,
    @Res() notFound: TsoaResponse<400, BasicResponseDto>,
    @Res() success: TsoaResponse<200, BasicResponseDto>
): Promise<void> {
    try {
        const galeria = await this.galeriaService.getGaleria(id, name, imagemId, usuarioId);     
        return success(200, new BasicResponseDto("Galeria encontrada!", galeria));
    } catch (error: any) {
        return notFound(400, new BasicResponseDto("Galeria não encontrada...", undefined));
    }
};

@Get("todos")
async getGalerias(
    @Res() notFound: TsoaResponse<400, BasicResponseDto>,
    @Res() success: TsoaResponse<200, BasicResponseDto>
): Promise<void> {
    try {
        const galerias = await this.galeriaService.getTodosGaleria();     
        return success(200, new BasicResponseDto("Galerias encontradas!", galerias));
    } catch (error: any) {
        return notFound(400, new BasicResponseDto("Galerias não encontradas...", undefined));
    }
};     
        
};