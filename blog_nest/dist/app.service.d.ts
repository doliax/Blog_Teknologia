import { Model } from 'mongoose';
import { Posts } from './posts/posts';
export declare class AppService {
    private readonly postsModel;
    constructor(postsModel: Model<Posts>);
    getHello(): string;
    getPosts(): Promise<Posts[]>;
    getPostById(id: string): Promise<Posts>;
}
