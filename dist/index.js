"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Annotations = /** @class */ (function () {
    function Annotations() {
    }
    Annotations.registerClass = function (clazz, annotation) {
        if (Annotations.classes.get(clazz) === undefined)
            Annotations.classes.set(clazz, new Set());
        Annotations.classes.get(clazz).add(annotation);
    };
    Annotations.get = function (clazz) {
        return Annotations.classes.get(clazz);
    };
    Annotations.classes = new Map();
    return Annotations;
}());
exports.default = Annotations;
