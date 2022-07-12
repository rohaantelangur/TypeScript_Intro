//TYPESCRIPT INTRO: 1
//create a type name with a string
var first_name = "Rohaan";
//create a type age with a number
var age = 25;
//create a type isFetching with boolean 
var isFetching = true;
//create an array of numbers
var list1 = [1, 2, 3];
//create an array of strings (using array constructor generic type)
var list2 = ["rohaan", "amit", "vishal"];
//create a tuple , which keeps a string as the first value, and boolean as the second
var x;
x = ["hello", true];
//create an enum
//it should have User, SuperUser, Admin, SuperAdmin
var Color;
(function (Color) {
    Color[Color["User"] = 0] = "User";
    Color[Color["SuperUser"] = 1] = "SuperUser";
    Color[Color["Admin"] = 2] = "Admin";
    Color[Color["SuperAdmin"] = 3] = "SuperAdmin";
})(Color || (Color = {}));
//create a function that takes 2 arguments, x, y both numbers
//it should return the product of the 2 numbers
function product(x, y) {
    return x * y;
}
//create a function that takes 2 arguments, x ,y both numbers,
//it should divide output ( x / y )
function divide(x, y) {
    console.log(x / y);
}
//create a function that takes a name and prints it without returning anything
function prints(str) {
    console.log(str);
}
function buildName(_a) {
    var firstname = _a.firstname, _b = _a.lastname, lastname = _b === void 0 ? "Telangur" : _b;
    if (lastname)
        return firstname + " " + lastname;
    else
        return firstname;
}
var persons = [];
var PersonDetails = {
    firstName: "Rohaan",
    lastName: "Telangur",
    age: 24
};
PhoneBook(PersonDetails);
PhoneBook(PersonDetails);
function PhoneBook(PersonDetails) {
    persons.push(PersonDetails);
}
// console.log(persons);
