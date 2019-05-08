var shapes = [
    [4, "Trapezium"],
    [5, "Pentagon"],
    [3, "Triangle"],
    [4, "Rectangle"],
    [4, "Square"]
    ];
    
shapes.sort(function(a, b)
{
    if(a[0] === b[0])
    {
        var x = a[1].toLowerCase(), y = b[1].toLowerCase();
        
        return x < y ? -1 : x > y ? 1 : 0;
    }
    return a[0] - b[0];
});