"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const posts_1 = require("./posts/posts");
let AppService = class AppService {
    constructor(postsModel) {
        this.postsModel = postsModel;
    }
    getHello() {
        return 'Hello World!';
    }
    async getPosts() {
        const posts = await this.postsModel.find().exec();
        return posts;
    }
    async getPostById(id) {
        const post = await this.postsModel.findOne({ _id: id });
        return post;
    }
    async getPostsByCategoria(categoria) {
        const posts = await this.postsModel.find({ categoria: categoria });
        return posts;
    }
    async getPostsByNew(isNew) {
        const posts = await this.postsModel.find({ isNew: isNew });
        return posts;
    }
    async getPostByTitulo(titulo) {
        const post = await this.postsModel.findOne({ titulo: titulo });
        return post;
    }
    async updatePostById(id, updatePostDto) {
        const filter = { _id: id };
        const update = {
            titulo: updatePostDto.titulo,
            subtitulo: updatePostDto.subtitulo,
            texto: updatePostDto.texto,
            imagen: updatePostDto.imagen,
            isNew: updatePostDto.isNew,
            categoria: updatePostDto.categoria
        };
        const updatedPost = await this.postsModel.findByIdAndUpdate(filter, update);
        return updatedPost;
    }
    async deletePostById(id) {
        const filter = { _id: id };
        const updatedPost = await this.postsModel.findByIdAndDelete(filter);
        return updatedPost;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(posts_1.Posts.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AppService);
//# sourceMappingURL=app.service.js.map