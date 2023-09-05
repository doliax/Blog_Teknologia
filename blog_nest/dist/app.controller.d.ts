import { AppService } from './app.service';
import { Posts } from './posts/posts';
import { UpdatePostDto } from './dtos/update-post-dto/update-post-dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getPosts(): Promise<Posts[]>;
    getPostById(id: string): Promise<Posts>;
    getPostsByCategoria(categoria: string): Promise<Posts[]>;
    getPostByName(titulo: string): Promise<Posts>;
    updatePostById(id: string, updatePostDto: UpdatePostDto, res: any): Promise<Posts>;
    deletePostById(id: string, res: any): Promise<Posts>;
}
