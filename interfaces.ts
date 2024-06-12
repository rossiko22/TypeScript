//In outdir mod in tsconfig we can change the root where all js scripts are created from ts files

//If we enable sourceMap it tells the browser to redirect from where is the js file generated ,from which ts file

//If we have error in typescript it anyways is compiling to javascript


export interface User{
    name: string;
    age?: number; // if we want to make it optional , it means we can but not must use it we add ?
    id: number;
    email: string;
}

let {name : UserName , email} : User = {name : 'Dean', age: 20, id: 2, email : ''} // here we specify {} what we want to access and we can use only name and access through name, but i we make : Alias , we make other name for same variable

UserName = 'Steak'
console.log(UserName);


let user: User = { name : 'Marko',age : 20,id : 5380,email : 'markospasovski222@gmail.com'};

console.log(user);

interface Employee extends User{
    salary: number;
}

let employer = {name : 'Tara', id : 6350, email : 'example@outlook.com', salary : 5000}; // here we didn't add age because it is optional

console.log(employer);


export interface Login { // if we have to use this interface in other file , we must mark it with export
    // also we have to mark the User interface as export so we can import
    login() : User; // It has method that returns User object
}

let users : Array<User> = [{name : 'User1', id : 1, email : 'example@outlook.com'},{name : 'User2', id : 2, email : 'example@outlook.com'}, {name : 'User3', id : 3, email : 'example@outlook.com'}];

// We could also use this if we want to specify the variables for accessing users instead of whole array

let [user2, user3, ...restUsers] : Array<User> = [{name : 'User1', id : 1, email : 'example@outlook.com'},{name : 'User2', id : 2, email : 'example@outlook.com'}, {name : 'User3', id : 3, email : 'example@outlook.com'}];

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