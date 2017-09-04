export default class Annotations
{
    static classes:Map<string,Data> = new Map<string,Data>();

    static registerClass(clazz:string, annotation:string)
    {
        Annotations.init(clazz);
        Annotations.classes.get(clazz).classAnnotations.add(annotation);
    }

    static registerProperty(clazz:string, property:string, annotation:string)
    {
        Annotations.init(clazz);
        let propertyData:Map<string,Set<string>> = Annotations.classes.get(clazz).propertyAnnotations;

        if(propertyData.get(property)===undefined)
            propertyData.set(property, new Set<string>());
        propertyData.get(property).add(annotation);

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
    classAnnotations:Set<string> = new Set<string>();
    propertyAnnotations:Map<string,Set<string>> = new Map<string,Set<string>>();

}