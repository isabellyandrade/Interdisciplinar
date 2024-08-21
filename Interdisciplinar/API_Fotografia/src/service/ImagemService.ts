import { Imagem } from "../model/Imagem";
import { Usuario } from "../model/Usuario";
import { ImagemRepository } from "../repository/ImagemRepository";
import { UsuarioRepository } from "../repository/UsuarioRepository";

export class ImagemService{

    private imagemRepository =  ImagemRepository.getInstance();
    private usuarioRepository =  UsuarioRepository.getInstance();

    async cadastrarImagem(ImagemData: any): Promise<Imagem> {
        const {usuarioId, caminhoArq, filtroImagem} = ImagemData;
        if(!usuarioId || !caminhoArq || !filtroImagem){
            throw new Error("Informações incompletas");
        }
        const users: Usuario[] = await this.usuarioRepository.getUsuarioPorIdOuUsernameOuEmailOuTelefone(usuarioId, undefined, undefined, undefined);
        
        if(users.length == 0){
            throw new Error("Usuario não encontrado");
        }

        return this.imagemRepository.insertImagem(new Imagem(undefined, usuarioId, caminhoArq, filtroImagem));
    }

    async atualizarImagem(ImagemData: any): Promise<Imagem> {
        const { id, usuarioId, caminhoArq, filtroImagem} = ImagemData;
        if(!id || !usuarioId || !caminhoArq || !filtroImagem){
            throw new Error("Informações incompletas");
        }
        const imagem = new Imagem(id, usuarioId, caminhoArq, filtroImagem);
        const imagemsEncontradas: Imagem[]= await this.imagemRepository.getImagemByUsuarioIdOuIdOuFiltro(undefined, undefined, id)

        if(imagemsEncontradas.length == 0){
            throw new Error("Imagem informada inexistente.");
        }

        this.imagemRepository.updateImagem(imagem);
        return imagem;
    }

    async deletarImagem(ImagemData: any): Promise<Imagem> {
        const { id, usuarioId, caminhoArq, filtroImagem} = ImagemData;
        if(!id || !usuarioId || !caminhoArq || !filtroImagem){
            throw new Error("Informações incompletas");
        }
        if (typeof id !== 'number' ) {
            throw new Error("Informe um ID correto.");
        }

        const imagem = new Imagem(id, usuarioId, caminhoArq, filtroImagem);

        const result:any = await this.imagemRepository.deleteImagem(imagem.id);
        return imagem;
    }

    async getImagem(id: any, usuarioId: any, filtroImagem: any):Promise<Imagem|null>{
        const idNumber = parseInt(id, 10);
        const idUser = parseInt(usuarioId, 10);

        const result:Imagem[] = await this.imagemRepository.getImagemByUsuarioIdOuIdOuFiltro(idUser, filtroImagem, idNumber);
        
        if(result.length > 0){
            return result[0];
        }
        return null
    }

    async getImagens():Promise<Imagem[]>{
        return this.imagemRepository.filterAllImagem();
    }
}