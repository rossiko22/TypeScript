// we cannot use [id: number] as propertie of class if we dont have constructor . we can use [id!: number]

// Like other languages like java where we can have default constructor and parameter constructor
// In Typescript we can only have default or parameterr , not both 

class EmployeeInformation {
    id: number;  // private we can mark with private id , or in new angular 13 we use #id instead of private id

    name: string;

    address: string;

    constructor(id: number, name: string, address: string){
        this.id = id
        this.name = name
        this.address = address
    }

    public getName() : string{ // dont forget to add the return type
        return this.name;
    }

    getIdAndName() : string{
        return `ID : ${this.id} is the ID of ${this.name}`
        //return 'id:' + this.id + "-" + this.name; - This is old versing but we can do it also like this.
    }
}

    //This is without constructor and marked with ! properties

// let john = new EmployeeInformation();

// john.id = 1;
// john.name = "John";
// john.address = "Boston";

// console.log(john);

let marko = new EmployeeInformation(1, "Marko", "Chikago");
console.log(marko);
console.log(marko.getName());
console.log(marko.getIdAndName());


class Manager extends EmployeeInformation{

    constructor(id: number, name: string, address: string){
        super(id, name, address);
    }

    getIdAndName() : string{
        return `ID : ${this.id} is the ID of manager ${this.name}` // this is override , we dont have to specify override, it is done automatically we just have to create function with same name
        //return 'id:' + this.id + "-" + this.name; - This is old versing but we can do it also like this.
    }
}

let sara = new Manager(2, "Sara", "Boston")

console.log(sara.getIdAndName());
