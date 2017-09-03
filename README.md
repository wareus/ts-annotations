# ts-annotations

```
npm i https://github.com/wareus/ts-annotations.git
```

```
function First(target: any)
{
    Annotations.registerClass(target.name, "First");
}

@First

class Example
{

}

```