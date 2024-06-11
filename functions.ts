    //Three types that we can create functions , we have more than three.

    //Named function
function add(a: number, b: number) : number{  // the : number - line means that the return type will be number
    return a + b;
}

console.log(add(1, 2));


    //Arrow function

const sub = (num1 :number, num2: number) : number => num1 - num2; // This is another way of declaring function , for more watch more courses or course on udemy that you have

console.log(sub(1, 3));

    //Function expression
const multiply = function(num1: number, num2: number) : number{
    return num1 * num2;
}

    //Optional parameter function
function division(num1: number, num2: number, num3?: number) : number{
    return num3? num1 + num2 + num3 : num1 + num2; //This is called optinal channeling, if num3 exists add : is else add .
}

    //Default parameter function
function defaultParamAdd(num1: number, num2: number, num3: number = 0) : number{
    return num1 + num2 + num3;
}

    //I dont know name Functions :)
function getItems<T>(items : T[]) : T[] {
    return Array<T>().concat(items);
}

let concatResult = getItems<number>([1, 2, 3, 4, 5]);

let concatString = getItems<string>(['a', 'b', 'c', 'd', 'e']) // the <string> means that string will be the type in the array
