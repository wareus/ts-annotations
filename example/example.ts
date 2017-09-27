
import Annotations from "../index";

function First(test:string)
{
    return function (target: any)
    {
        Annotations.registerClass(target.name, "First", test);
    }
}


function Second(target: any)
{
    Annotations.registerClass(target.name, "Second", null);
}

function Property(test:string)
{
   return function (target:any, key:string)
   {
       Annotations.registerProperty(target.constructor.name,key,"Property",test);
   }
}


@First("test")
@Second
class Example
{
    @Property("test")
    name:string;

    @Property("this run")
    run()
    {

    }
}

console.log(Annotations.get("Example"));




