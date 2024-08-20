import { UsuarioService } from "../service/UsuarioService";
import{Route, Tags, Post, Body, Res, Put, Get, Query, Delete, Controller, TsoaResponse } from "tsoa";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { UsuarioRequestDto } from "../model/dto/UsuarioRequestDto";
import { UsuarioDto } from "../model/dto/UsuarioDto";

@Route("usuario")
@Tags("Usuario")
export class UsuarioController extends Controller{
    usuarioService = new UsuarioService();

    @Post()
    async cadastrarUsuario(
        @Body() dto: UsuarioRequestDto,
        @Res() fail: TsoaResponse<409, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise<void>{
        try {
            const novoUsuario = await this.usuarioService.cadastrarUsuario(dto);
            return success(201, new BasicResponseDto("Usuário adicionado com sucesso!", novoUsuario));
    }catch (error: any) {
        return fail(409, new BasicResponseDto(error.message, undefined));
    }
};

@Put()
async atualizarUsuario(
    @Body() dto: UsuarioDto,
    @Res() notFound: TsoaResponse<400, BasicResponseDto>,
    @Res() success: TsoaResponse<200, BasicResponseDto>
): Promise<void>{
    try {
        const usuario = await this.usuarioService.atualizarUsuario(dto);
        return success(200, new BasicResponseDto("Usuário atualizado com sucesso!", usuario));
}catch (error: any) {
    return notFound(400, new BasicResponseDto(error.message, undefined));
}

};

@Delete()
async deletarUsuario(
    @Body() dto: UsuarioDto,
    @Res() notFound: TsoaResponse<400, BasicResponseDto>,
    @Res() success: TsoaResponse<200, BasicResponseDto>
): Promise<void>{
    try {
        const usuario = await this.usuarioService.deletarUsuario(dto);
        return success(200, new BasicResponseDto("Usuário deletado com sucesso!", usuario));
}catch (error: any) {
    return notFound(400, new BasicResponseDto(error.message, undefined));
}

};

@Get()
async getUsuario(
    @Query() id: number,
    @Query() username: string,
    @Query() email: string,
    @Query() telefone: string,
    @Res() notFound: TsoaResponse<400, BasicResponseDto>,
    @Res() success: TsoaResponse<200, BasicResponseDto>
): Promise<void> {
    try {
        const usuario = await this.usuarioService.getUsuario(id, username, email, telefone);     
        return success(200, new BasicResponseDto("Usuário encontrado!", usuario));
    } catch (error: any) {
        return notFound(400, new BasicResponseDto("Usuário não encontrado...", undefined));
    }
};

@Get("todos")
async getUsuarios(
    @Res() notFound: TsoaResponse<400, BasicResponseDto>,
    @Res() success: TsoaResponse<200, BasicResponseDto>
): Promise<void> {
    try {
        const usuarios = await this.usuarioService.getTodosUsuario();     
        return success(200, new BasicResponseDto("Usuários encontrado!", usuarios));
    } catch (error: any) {
        return notFound(400, new BasicResponseDto("Usuários não encontrados...", undefined));
    }
};     
}