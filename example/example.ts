
import Annotations from "../index";


function First(target: any)
{
    Annotations.registerClass(target.name, "First");
}


function Second(target: any)
{
    Annotations.registerClass(target.name, "Second");
}

function Property(target:any, key:string)
{
    Annotations.registerProperty(target.constructor.name,key,"Property")
}

@First
@Second
class Example
{
    @Property
    name:string;

    @Property
    run()
    {

    }
}

console.log(Annotations.get("Example"));




