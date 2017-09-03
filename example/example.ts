
import Annotations from "../index";


function First(target: any)
{
    Annotations.registerClass(target.name, "First");
}


function Second(target: any)
{
    Annotations.registerClass(target.name, "Second");
}

@First
@Second
class Example
{

}


console.log(Annotations.get("Example"));




