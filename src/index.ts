//TYPESCRIPT INTRO: 1

//create a type name with a string
let first_name: string = "Rohaan"

//create a type age with a number
let age: number = 25

//create a type isFetching with boolean 
let isFetching: boolean = true

//create an array of numbers
let list1: number[] = [1, 2, 3];

//create an array of strings (using array constructor generic type)
let list2: string[] = ["rohaan", "amit", "vishal"];

//create a tuple , which keeps a string as the first value, and boolean as the second
let x: [string, boolean];
x = ["hello", true];

//create an enum
//it should have User, SuperUser, Admin, SuperAdmin
enum Color {
    User,
    SuperUser,
    Admin,
    SuperAdmin,
}

//create a function that takes 2 arguments, x, y both numbers
//it should return the product of the 2 numbers
function product(x: number, y: number): number {
    return x * y
}

//create a function that takes 2 arguments, x ,y both numbers,
//it should divide output ( x / y )
function divide(x: number, y: number): void {
    console.log(x / y);
}

//create a function that takes a name and prints it without returning anything
function prints(str: string): void {
    console.log(str);
}


//TYPESCRIPT INTRO: 2

interface ButtonProps {
    title: string;
    status: boolean;
    id: number;
}

interface Person {
    firstname: string,
    lastname?: string
}

function buildName({ firstname, lastname = "Telangur" }: Person) {
    if (lastname) return firstname + " " + lastname;
    else return firstname;
}


interface Address {
    houseNumber: number;
    street: string;
    city: string;
    state: string;
    postalCode: number;
    country: string;
}

interface PersonDetails {
    Prefix?: string;
    phones: number[];
    addresses: string[];
    email?: string;
    firstname: string;
    lastname: string;
    middlename?: string;
}

let persons: string[]=[]

interface PersonDetail{
    firstName:string;
    lastName:string;
    age:number;
}

const PersonDetails: PersonDetail={
    firstName:"Rohaan",
    lastName:"Telangur",
    age:24,
}

PhoneBook(PersonDetails)
PhoneBook(PersonDetails)

function PhoneBook(PersonDetails) {
persons.push(PersonDetails)
}
// console.log(persons);







