import { Imagem } from "../model/Imagem";
import { Galeria } from "../model/Galeria";
import { Usuario } from "../model/Usuario";
import { ImagemRepository } from "../repository/ImagemRepository";
import { GaleriaRepository } from "../repository/GaleriaRepository";
import { UsuarioRepository } from "../repository/UsuarioRepository";

export class GaleriaService{

    imagemRepository = ImagemRepository.getInstance();
    galeriaRepository = GaleriaRepository.getInstance();
    usuarioRepository = UsuarioRepository.getInstance();

    async cadastrarGaleria(GaleriaData: any): Promise<Galeria> {
        const {name, imagemId, usuarioId} = GaleriaData;
        if(!name || !imagemId || !usuarioId){
            throw new Error("Informações incompletas");
        }
        const users: Usuario[] = await this.usuarioRepository.getUsuarioPorIdOuUsernameOuEmailOuTelefone(usuarioId, undefined, undefined, undefined);
        const imagens: Imagem[] = await this.imagemRepository.getImagemByUsuarioIdOuIdOuFiltro(undefined, undefined, imagemId);

        if(users.length == 0){
            throw new Error("Usuario não encontrado");
        }
        if(imagens.length == 0){
            throw new Error("Imagem não encontrada");
        }
        return this.galeriaRepository.insertGaleria(new Galeria(undefined, name, imagemId, usuarioId));
    }

    async atualizarGaleria(GaleriaData: any): Promise<Galeria> {
        const galeria = new Galeria(GaleriaData.id, GaleriaData.name, GaleriaData.imagemId, GaleriaData.usuarioId);
        if (!(galeria instanceof Galeria)) {
            throw new Error("O parâmetro passado não é um objeto do tipo Galeria");
        }
        this.galeriaRepository.updateGaleria(galeria);
        return galeria;
    }

    async deletarGaleria(GaleriaData: any): Promise<Galeria> {
        const galeria = new Galeria(GaleriaData.id, GaleriaData.name, GaleriaData.imagemId, GaleriaData.usuarioId);
        if (!(galeria instanceof Galeria)) {
            throw new Error("O parâmetro passado não é um objeto do tipo Galeria");
        }
        const result:any = await this.galeriaRepository.deleteGaleria(galeria);
        if (result.affectedRows == 0) {
            throw new Error("Galeria não encontrada.");
        }
        return galeria;
    }

    async getGaleria(id:any, name:any, imagemId:any, usuarioId: any):Promise<Galeria|null>{
        const idNumber: number = parseInt(id,10);
        const imagemNumber: number = parseInt(imagemId, 10);
        const userNumber: number = parseInt(usuarioId, 10);

        const result:Galeria[] = await this.galeriaRepository.getGaleriaPorIdOuNameOuImagemOuUsuario(idNumber, name, imagemNumber, userNumber);
        if(result.length > 0){
            return result[0];
        }
        return null
    }

    async getTodosGaleria():Promise<Galeria[]>{
        return this.galeriaRepository.filterAllGaleria();
    }
}