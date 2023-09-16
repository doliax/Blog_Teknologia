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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const update_post_dto_1 = require("./dtos/update-post-dto/update-post-dto");
const opiniones_dto_1 = require("./dtos/update-post-dto/opiniones-dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    async getPosts() {
        return this.appService.getPosts();
    }
    async getPostById(id) {
        const post = await this.appService.getPostById(id);
        return post;
    }
    async getPostsByCategoria(categoria) {
        const posts = await this.appService.getPostsByCategoria(categoria);
        return posts;
    }
    async getPostsByisNew(isNew) {
        const posts = await this.appService.getPostsByNew(isNew);
        return posts;
    }
    async getPostByName(titulo) {
        const post = await this.appService.getPostByTitulo(titulo);
        return post;
    }
    async updatePostById(id, updatePostDto, res) {
        const post = await this.appService.updatePostById(id, updatePostDto);
        if (post) {
            res.status(200).json({ message: 'El post se actualizó exitosamente' });
        }
        return post;
    }
    async deletePostById(id, res) {
        const post = await this.appService.deletePostById(id);
        if (post) {
            res.status(200).json({ message: 'El post se borró exitosamente' });
        }
        return post;
    }
    async getOpiniones() {
        return this.appService.getOpiniones();
    }
    async deleteOpinion(id, res) {
        const opinion = await this.appService.deleteOpinionById(id);
        if (opinion) {
            res.status(200).json({ message: 'La opinión se borró exitosamente' });
        }
        return opinion;
    }
    async createOpinion(OpinionesDTO, res) {
        const opinion = await this.appService.createOpinion(OpinionesDTO);
        if (opinion) {
            res.status(200).json({ message: 'La opinión se creó exitosamente' });
        }
        return opinion;
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('posts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getPosts", null);
__decorate([
    (0, common_1.Get)('posts/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getPostById", null);
__decorate([
    (0, common_1.Get)('categoria/:categoria'),
    __param(0, (0, common_1.Param)('categoria')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getPostsByCategoria", null);
__decorate([
    (0, common_1.Get)('estado/:isNew'),
    __param(0, (0, common_1.Param)('isNew')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getPostsByisNew", null);
__decorate([
    (0, common_1.Get)('titulo/:titulo'),
    __param(0, (0, common_1.Param)('titulo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getPostByName", null);
__decorate([
    (0, common_1.Put)('posts/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_post_dto_1.UpdatePostDto, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updatePostById", null);
__decorate([
    (0, common_1.Delete)('posts/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deletePostById", null);
__decorate([
    (0, common_1.Get)('opiniones'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getOpiniones", null);
__decorate([
    (0, common_1.Delete)('opinion/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteOpinion", null);
__decorate([
    (0, common_1.Put)('opinion'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [opiniones_dto_1.OpinionesDTO, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createOpinion", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map