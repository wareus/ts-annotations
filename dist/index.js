"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Annotations = /** @class */ (function () {
    function Annotations() {
    }
    Annotations.registerClass = function (clazz, annotation, data) {
        Annotations.init(clazz);
        Annotations.classes.get(clazz).classAnnotations.set(annotation, data);
    };
    Annotations.registerProperty = function (clazz, property, annotation, data) {
        Annotations.init(clazz);
        var propertyData = Annotations.classes.get(clazz).propertyAnnotations;
        if (propertyData.get(property) === undefined)
            propertyData.set(property, new Map());
        propertyData.get(property).set(annotation, data);
    };
    Annotations.get = function (clazz) {
        return Annotations.classes.get(clazz);
    };
    Annotations.init = function (clazz) {
        if (Annotations.classes.get(clazz) === undefined)
            Annotations.classes.set(clazz, new Data());
    };
    Annotations.classes = new Map();
    return Annotations;
}());
exports.default = Annotations;
var Data = /** @class */ (function () {
    function Data() {
        this.classAnnotations = new Map();
        this.propertyAnnotations = new Map();
    }
    return Data;
}());
