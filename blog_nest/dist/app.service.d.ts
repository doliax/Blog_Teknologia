import { Model } from 'mongoose';
import { Posts } from './posts/posts';
import { UpdatePostDto } from './dtos/update-post-dto/update-post-dto';
export declare class AppService {
    private readonly postsModel;
    constructor(postsModel: Model<Posts>);
    getHello(): string;
    getPosts(): Promise<Posts[]>;
    getPostById(id: string): Promise<Posts>;
    getPostsByCategoria(categoria: string): Promise<Posts[]>;
    getPostsByNew(isNew: boolean): Promise<Posts[]>;
    getPostByTitulo(titulo: string): Promise<Posts>;
    updatePostById(id: string, updatePostDto: UpdatePostDto): Promise<Posts>;
    deletePostById(id: string): Promise<Posts>;
}
