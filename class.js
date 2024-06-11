"use strict";
// we cannot use [id: number] as propertie of class if we dont have constructor . we can use [id!: number]
// Like other languages like java where we can have default constructor and parameter constructor
// In Typescript we can only have default or parameterr , not both 
class EmployeeInformation {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getName() {
        return this.name;
    }
    getIdAndName() {
        return `ID : ${this.id} is the ID of ${this.name}`;
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
