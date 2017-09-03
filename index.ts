export default class Annotations
{
    static annotaions:Map<string,Set<string>> = new Map<string,Set<string>>();

    static registerClass(clazz:string, annotation:string)
    {
        if(Annotations.annotaions.get(annotation) === undefined)
            Annotations.annotaions.set(annotation,new Set<string>());
        Annotations.annotaions.get(annotation).add(clazz);
    }

    static get(clazz:string):Set<string>
    {
        return Annotations.annotaions.get(clazz);
    }
}