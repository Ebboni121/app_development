var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//explicit type
function greeter(username) {
    console.log("Welcome to TypeScript ".concat(username));
}
var user = "Ebboni";
greeter(user);
//implicit type
var y = 12;
console.log(y);
// explicit array (list)
var colors = ['red', 'pink', 'orange'];
console.log(colors);
//implicit array
var numbers = [3, -9, 5];
console.log(numbers);
console.log("\n =======Example 2 'any' type======");
// use the any date type  all all types
var a;
a = 5;
console.log("a=5", typeof (a));
a = "jade";
console.log("a = 'jade'", typeof (a));
a = false;
console.log("a = false", typeof (a));
console.log("\n =======Example 3 'any' type======");
//unknow is simliar to any
var b;
b = 10;
console.log("b = 10", typeof (b));
b = "ebboni";
console.log("b = 'ebboni'", typeof (b));
b = true;
console.log("b = true", typeof (b));
console.log("\n =======Example 4 'enum' type======");
//enum is a special class that represents a group oor list of constant values ( values cant be changed)
//enum can use numerical or string
var Countries;
(function (Countries) {
    Countries[Countries["usa"] = 0] = "usa";
    Countries[Countries["canada"] = 1] = "canada";
    Countries[Countries["mexico"] = 2] = "mexico";
})(Countries || (Countries = {}));
var usa = Countries.usa;
var canada = Countries.canada;
var mexico = Countries.mexico;
console.log("class object of Canada ".concat(canada));
console.log("class object of usa ".concat(usa));
console.log("class object of mexico ".concat(mexico));
console.log("\n ====================Example 5 data type classes======================");
//if data type is explicit you can directly use the method to specific data type
var username = "Jade No";
var characters_username = username.length;
console.log("User ".concat(username, " has ").concat(characters_username, " characters"));
// if it is an impliciit data type, we must cast it to the spcific data type before applying a method
var firstname = "Luisa";
//cast into string
firstname = firstname;
var character_firstname = firstname.length;
console.log("User ".concat(firstname, " has ").concat(character_firstname, " characters"));
console.log("\n ====================Example 6: return type function======================");
function get_time() {
    return new Date().getHours();
}
console.log("the time is ".concat(get_time(), " h"));
console.log("\n ====================Example 7: void function======================");
//void function does not return
function greeting() {
    console.log('window to angular data type!');
}
//calling function
greeting();
console.log("\n ====================Example 8: void function======================");
function get_sum(num1, num2, name) {
    var result = name + ", the sum is" + (num1 + num2);
    return result;
}
console.log(get_sum(2, 3, "Jade"));
console.log("/n -------------example 9: optional parameters----------");
//The ? operator marks parameter as optional.
function sum_total(n1, n2) {
    if (n2 == undefined) {
        return (n1 + n2);
    }
    else {
        return -1;
    }
}
console.log("the sum is ".concat(sum_total(5, 9)));
console.log("\n ====================Example 10: void function======================");
//spread syntax is used to deconstruct an array
function get_average() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    var total = 0;
    var average = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += n[i];
    }
    average = total / n.length;
    return average;
}
console.log("the average is ".concat(get_average(10, 6, 2)));
console.log("\n ====================Example 11: class======================");
var Car = /** @class */ (function () {
    function Car(brand, model, year_manufacture) {
        this.brand = brand;
        this.model = model;
        this.year_manufacture = year_manufacture;
    }
    Car.prototype.year = function () {
        console.log("the car was manufactured in ".concat(this.year_manufacture));
    };
    return Car;
}());
//create model for class
var usercar = new Car('Tesla', 'S', 2023);
//access data of the car model through "usercar"
console.log("Car brand = ".concat(usercar.brand));
usercar.year(); //accessing method year
console.log("\n ====================Example 12: inherent class======================");
//inheretans is a name of transfer generic characteristics by extending from one class to another using "extends"
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.save = function () {
        console.log('registraion success');
    };
    return Person;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer.prototype.sale = function () {
        console.log('x items was sold');
    };
    return Customer;
}(Person));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.salary = function () {
        console.log('salary paid');
    };
    return Employee;
}(Customer));
//creatie a modal for person
var person1 = new Person;
//calling the methos "save()" of the modal person 1
console.log("calling the method 'save()' of the modal 'person1' ");
person1.save();
//createa modal for Customer
var customer1 = new Customer;
//calling the method 'sale()' of the modal customer1
console.log("calling the method 'sale()' of the modal 'customer1'");
customer1.sale();
//calling the inherent method 'sale()' through modal customer1
console.log("calling the method 'save()' through modal 'employee1'");
customer1.save();
//create modal for Employee
var employee1 = new Employee;
//calling the inherent method 'save() through modal employee 1
console.log("calling the inherent method 'save()' through modal 'employee1'");
employee1.save();
