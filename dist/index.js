"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Annotations = /** @class */ (function () {
    function Annotations() {
    }
    Annotations.registerClass = function (clazz, annotation) {
        if (Annotations.annotaions.get(annotation) === undefined)
            Annotations.annotaions.set(annotation, new Set());
        Annotations.annotaions.get(annotation).add(clazz);
    };
    Annotations.get = function (annotaion) {
        return Annotations.annotaions.get(annotaion);
    };
    Annotations.annotaions = new Map();
    return Annotations;
}());
exports.default = Annotations;
