//explicit type
function greeter(username:string){
    console.log(`Welcome to TypeScript ${username}`)
}

let user = "Ebboni"
greeter(user)

//implicit type
let y = 12

console.log(y);

// explicit array (list)
let colors:string[] = ['red', 'pink', 'orange']
console.log(colors)

//implicit array
let numbers =[3,-9,5]
console.log (numbers)

console.log ("\n =======Example 2 'any' type======")
// use the any date type  all all types
let a:any 
a =5;
console.log("a=5", typeof (a))

a = "jade"
console.log("a = 'jade'", typeof (a))

a= false
console.log("a = false", typeof (a))

console.log ("\n =======Example 3 'any' type======")
//unknow is simliar to any

let b:unknown
b = 10
console.log("b = 10", typeof (b))

b= "ebboni"
console.log("b = 'ebboni'", typeof (b))

b = true
console.log("b = true", typeof (b))

console.log ("\n =======Example 4 'enum' type======")
//enum is a special class that represents a group oor list of constant values ( values cant be changed)
//enum can use numerical or string

enum Countries {usa, canada, mexico}
let usa = Countries.usa
let canada = Countries.canada
let mexico = Countries.mexico

console.log(`class object of Canada ${canada}`)
console.log(`class object of usa ${usa}`)
console.log(`class object of mexico ${mexico}`)

console.log ("\n ====================Example 5 data type classes======================")

//if data type is explicit you can directly use the method to specific data type

let username:string = "Jade No"
let characters_username = username.length
console.log (`User ${username} has ${characters_username} characters`)

// if it is an impliciit data type, we must cast it to the spcific data type before applying a method
let firstname = "Luisa"
//cast into string
firstname = <string> firstname
let character_firstname = firstname.length
console.log (`User ${firstname} has ${character_firstname} characters`)


console.log ("\n ====================Example 6: return type function======================")

function get_time():number{
    return new Date().getHours()
}

console.log(`the time is ${get_time()} h`)

console.log ("\n ====================Example 7: void function======================")
//void function does not return

function greeting():void{
    console.log('window to angular data type!')
}
//calling function
greeting()

console.log ("\n ====================Example 8: void function======================")
function get_sum(num1:number, num2:number, name:string):string{
   let result:string = name +", the sum is" + (num1+num2)
   return result
}
console.log(get_sum(2,3,"Jade"))
console.log ("/n -------------example 9: optional parameters----------")
//The ? operator marks parameter as optional.
function sum_total(n1:number,n2?:number):number{
    if (n2 ! == undefined){
        return (n1+n2)
    }
    else{
        return -1
    }
}
console.log (`the sum is ${sum_total(5,9)}`)

console.log ("\n ====================Example 10: void function======================")
//spread syntax is used to deconstruct an array
function get_average(...n:number[]) : number{
    let total = 0
    let average = 0
    for(let i = 0; i<numbers.length;i++){
        total +=n[i]
    }
    average = total /n.length
    return average
}
console.log(`the average is ${get_average(10, 6, 2)}`)

console.log("\n ====================Example 11: class======================")
class Car{
    //define the data type
    brand: string
    model: string
    year_manufacture:number

    constructor (brand:string, model:string, year_manufacture: number){
        this.brand = brand
        this.model  = model
        this.year_manufacture = year_manufacture
    }

        year(){
            console.log (`the car was manufactured in ${this.year_manufacture}`)
        }

    }
//create model for class

let usercar = new Car('Tesla', 'S',2023)

//access data of the car model through "usercar"

console.log (`Car brand = ${usercar.brand}`)
usercar.year() //accessing method year

console.log("\n ====================Example 12: inherent class======================")

//inheretans is a name of transfer generic characteristics by extending from one class to another using "extends"

class Person{
    save(){
        console.log('registraion success')
    }
}
class Customer extends Person{
    sale(){
        console.log('x items was sold')
    }
}

class Employee extends Customer{
    salary(){
        console.log('salary paid')
    }
}

//creatie a modal for person
let person1= new Person 
//calling the methos "save()" of the modal person 1
console.log ("calling the method 'save()' of the modal 'person1' ")
person1.save()

//createa modal for Customer

let customer1= new Customer

//calling the method 'sale()' of the modal customer1
console.log ("calling the method 'sale()' of the modal 'customer1'")
customer1.sale()

//calling the inherent method 'sale()' through modal customer1
console.log ("calling the method 'save()' through modal 'employee1'")
customer1.save()

//create modal for Employee

let employee1=new Employee
//calling the inherent method 'save() through modal employee 1
console.log ("calling the inherent method 'save()' through modal 'employee1'")
employee1.save()