import { Imagem } from "../model/Imagem";
import { ImagemRepository } from "../repository/ImagemRepository";

export class ImagemService{

    private imagemRepository =  ImagemRepository.getInstance();

    async cadastrarImagem(ImagemData: any): Promise<Imagem> {
        const {caminhoArq, filtroImagem} = ImagemData;
        if(!caminhoArq || !filtroImagem){
            throw new Error("Informações incompletas");
        }
        let imagem = new Imagem(undefined, caminhoArq, filtroImagem)
        const imagemsEncontradas: Imagem[]= await this.imagemRepository.getImagemByIdOuFiltro(imagem.caminhoArq, undefined)

        if(imagemsEncontradas.length > 0){
            throw new Error("Imagem já adicionada");
        }

        return this.imagemRepository.insertImagem(imagem);
    }

    async atualizarImagem(ImagemData: any): Promise<Imagem> {
        const { id, caminhoArq, filtroImagem} = ImagemData;
        if(!id || !caminhoArq || !filtroImagem){
            throw new Error("Informações incompletas");
        }
        const imagem = new Imagem(id, caminhoArq, filtroImagem);
        const imagemsEncontradas: Imagem[]= await this.imagemRepository.getImagemByIdOuFiltro(undefined, id)

        if(imagemsEncontradas.length == 0){
            throw new Error("Imagem informada inexistente.");
        }

        this.imagemRepository.updateImagem(imagem);
        return imagem;
    }

    async deletarImagem(ImagemData: any): Promise<Imagem> {
        const { id, caminhoArq, filtroImagem} = ImagemData;
        if(!id || !caminhoArq || !filtroImagem){
            throw new Error("Informações incompletas");
        }
        if (typeof id !== 'number' ) {
            throw new Error("Informe um ID correto.");
        }

        const imagem = new Imagem(id, caminhoArq, filtroImagem);

        const result:any = await this.imagemRepository.deleteImagem(imagem.id);
        return imagem;
    }

    async getImagem(id: any, filtroImagem: any):Promise<Imagem|null>{
        const idNumber = parseInt(id, 10);
        const result:Imagem[] = await this.imagemRepository.getImagemByIdOuFiltro(filtroImagem, idNumber);
        
        if(result.length > 0){
            return result[0];
        }
        return null
    }

    async getImagens():Promise<Imagem[]>{
        return this.imagemRepository.filterAllImagem();
    }
}