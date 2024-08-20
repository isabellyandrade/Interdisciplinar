import { ImagemService } from "../service/ImagemService";
import{Route, Tags, Post, Body, Res, Put, Get, Query, Delete, Controller, TsoaResponse } from "tsoa";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { ImagemRequestDto } from "../model/dto/ImagemRequestDto";
import { ImagemDto } from "../model/dto/ImagemDto";

@Route("imagem")
@Tags("Imagem")
export class ImagemController extends Controller{
    imagemService = new ImagemService();

    @Post()
    async cadastrarImagem(
        @Body() dto: ImagemRequestDto,
        @Res() fail: TsoaResponse<409, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise<void>{
        try {
            const novaImagem = await this.imagemService.cadastrarImagem(dto);
            return success(201, new BasicResponseDto("Imagem adicionada com sucesso!", novaImagem));
    }catch (error: any) {
        return fail(409, new BasicResponseDto(error.message, undefined));
    }
};

@Put()
async atualizarImagem(
    @Body() dto: ImagemDto,
    @Res() notFound: TsoaResponse<400, BasicResponseDto>,
    @Res() success: TsoaResponse<200, BasicResponseDto>
): Promise<void>{
    try {
        const imagem = await this.imagemService.atualizarImagem(dto);
        return success(200, new BasicResponseDto("Imagem atualizada com sucesso!", imagem));
}catch (error: any) {
    return notFound(400, new BasicResponseDto(error.message, undefined));
}

};

@Delete()
async deletarImagem(
    @Body() dto: ImagemDto,
    @Res() notFound: TsoaResponse<400, BasicResponseDto>,
    @Res() success: TsoaResponse<200, BasicResponseDto>
): Promise<void>{
    try {
        const imagem = await this.imagemService.deletarImagem(dto);
        return success(200, new BasicResponseDto("Imagem deletada com sucesso!", imagem));
}catch (error: any) {
    return notFound(400, new BasicResponseDto(error.message, undefined));
}

};

@Get()
async getImagem(
    @Query() id: number,
    @Query() usuarioId: number,
    @Query() filtroImagem: string,
    @Res() notFound: TsoaResponse<400, BasicResponseDto>,
    @Res() success: TsoaResponse<200, BasicResponseDto>
): Promise<void> {
    try {
        const imagem = await this.imagemService.getImagem(id, usuarioId, filtroImagem);     
        return success(200, new BasicResponseDto("Imagem encontrada!", imagem));
    } catch (error: any) {
        return notFound(400, new BasicResponseDto("Imagem não encontrada...", undefined));
    }
};

@Get("todos")
async getImagems(
    @Res() notFound: TsoaResponse<400, BasicResponseDto>,
    @Res() success: TsoaResponse<200, BasicResponseDto>
): Promise<void> {
    try {
        const imagens = await this.imagemService.getImagens();     
        return success(200, new BasicResponseDto("Imagens encontradas!", imagens));
    } catch (error: any) {
        return notFound(400, new BasicResponseDto("Imagens não encontradas...", undefined));
    }
};    

};