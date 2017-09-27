export default class Annotations
{
    static classes:Map<string,Data> = new Map<string,Data>();

    static registerClass(clazz:string, annotation:string, data:any)
    {
        Annotations.init(clazz);
        Annotations.classes.get(clazz).classAnnotations.set(annotation,data);
    }

    static registerProperty(clazz:string, property:string, annotation:string, data:any)
    {
        Annotations.init(clazz);
        let propertyData:Map<string,Map<string,any>> = Annotations.classes.get(clazz).propertyAnnotations;

        if(propertyData.get(property)===undefined)
            propertyData.set(property, new Map<string,any>());
        propertyData.get(property).set(annotation, data);

    }

    static get(clazz:string):Data
    {
        return Annotations.classes.get(clazz);
    }

    private static init(clazz:string)
    {
        if(Annotations.classes.get(clazz) === undefined)
            Annotations.classes.set(clazz,new Data());
    }
}

class Data
{
    classAnnotations:Map<string,any> = new Map<string,any>();
    propertyAnnotations:Map<string,Map<string,any>> = new Map<string,Map<string,any>>();

}
