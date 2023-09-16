import { Model } from 'mongoose';
import { Posts } from './posts/posts';
import { UpdatePostDto } from './dtos/update-post-dto/update-post-dto';
import { Opiniones } from './posts/opiniones';
export declare class AppService {
    private readonly postsModel;
    private readonly opinionesModel;
    constructor(postsModel: Model<Posts>, opinionesModel: Model<Opiniones>);
    getHello(): string;
    getPosts(): Promise<Posts[]>;
    getPostById(id: string): Promise<Posts>;
    getPostsByCategoria(categoria: string): Promise<Posts[]>;
    getPostsByNew(isNew: boolean): Promise<Posts[]>;
    getPostByTitulo(titulo: string): Promise<Posts>;
    updatePostById(id: string, updatePostDto: UpdatePostDto): Promise<Posts>;
    deletePostById(id: string): Promise<Posts>;
    getOpiniones(): Promise<Opiniones[]>;
    deleteOpinionById(id: string): Promise<Opiniones>;
    createOpinion(opinionDTO: Opiniones): Promise<Opiniones>;
}
