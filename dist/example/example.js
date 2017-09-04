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
var index_1 = require("../index");
function First(target) {
    index_1.default.registerClass(target.name, "First");
}
function Second(target) {
    index_1.default.registerClass(target.name, "Second");
}
function Property(target, key) {
    index_1.default.registerProperty(target.constructor.name, key, "Property");
}
var Example = /** @class */ (function () {
    function Example() {
    }
    Example.prototype.run = function () {
    };
    __decorate([
        Property,
        __metadata("design:type", String)
    ], Example.prototype, "name", void 0);
    __decorate([
        Property,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Example.prototype, "run", null);
    Example = __decorate([
        First,
        Second
    ], Example);
    return Example;
}());
console.log(index_1.default.get("Example"));
