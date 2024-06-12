"use strict";
//In outdir mod in tsconfig we can change the root where all js scripts are created from ts files
Object.defineProperty(exports, "__esModule", { value: true });
let { name: UserName, email } = { name: 'Dean', age: 20, id: 2, email: '' }; // here we specify {} what we want to access and we can use only name and access through name, but i we make : Alias , we make other name for same variable
UserName = 'Steak';
console.log(UserName);
let user = { name: 'Marko', age: 20, id: 5380, email: 'markospasovski222@gmail.com' };
console.log(user);
let employer = { name: 'Tara', id: 6350, email: 'example@outlook.com', salary: 5000 }; // here we didn't add age because it is optional
console.log(employer);
let users = [{ name: 'User1', id: 1, email: 'example@outlook.com' }, { name: 'User2', id: 2, email: 'example@outlook.com' }, { name: 'User3', id: 3, email: 'example@outlook.com' }];
// We could also use this if we want to specify the variables for accessing users instead of whole array
let [user2, user3, ...restUsers] = [{ name: 'User1', id: 1, email: 'example@outlook.com' }, { name: 'User2', id: 2, email: 'example@outlook.com' }, { name: 'User3', id: 3, email: 'example@outlook.com' }];
// Here the names arent doing anything , the logic is we have two user2 and user3 and it will take the first two objects in array and assign into them , if we have one it will take one no matter we name it user4 :)
console.log(users[0]);
console.log(user2);
console.log(restUsers); // Inspect more about ... , it is like ** args in python
// @Component({})
// class Component{
//     name : string;
//     constructor(name: string){
//         this.name = name;
//     }
// } 
//I dont know why we cant use this
//# sourceMappingURL=interfaces.js.map