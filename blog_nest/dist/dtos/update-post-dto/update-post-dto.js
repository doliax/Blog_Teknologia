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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePostDto = void 0;
const decorators_1 = require("@nestjs/swagger/dist/decorators");
class UpdatePostDto {
}
exports.UpdatePostDto = UpdatePostDto;
__decorate([
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdatePostDto.prototype, "titulo", void 0);
__decorate([
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdatePostDto.prototype, "subtitulo", void 0);
__decorate([
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdatePostDto.prototype, "texto", void 0);
__decorate([
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdatePostDto.prototype, "imagen", void 0);
__decorate([
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdatePostDto.prototype, "creador", void 0);
__decorate([
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], UpdatePostDto.prototype, "isNew", void 0);
__decorate([
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdatePostDto.prototype, "categoria", void 0);
//# sourceMappingURL=update-post-dto.js.map