export default class Annotations
{
    static classes:Map<string,Set<string>> = new Map<string,Set<string>>();

    static registerClass(clazz:string, annotation:string)
    {
        if(Annotations.classes.get(clazz) === undefined)
            Annotations.classes.set(clazz,new Set<string>());
        Annotations.classes.get(clazz).add(annotation);
    }

    static get(clazz:string):Set<string>
    {
        return Annotations.classes.get(clazz);
    }
}